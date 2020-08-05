import React, { useState, useContext } from "react";
import axios from "axios";
import AddCategoryNodeForm from "../components/AddCategoryNodeForm";
import UserContext from "../context/userContext";

const AddCategoryNodeFormContainer = (props) => {
  const [newCategoryTitle, changeNewCategoryTitle] = useState();
  const [requestStatus, updateRequestStatus] = useState('IDLE');

  const { user } = useContext(UserContext);

  const onNewCategoryTitleChange = (event) => {
    changeNewCategoryTitle(event.target.value);
  };

  const createCategoryNode = () => {
    updateRequestStatus('STARTED');

    // Request API.
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/nodes`, {
        Type: "Category",
        CategoryName: newCategoryTitle,
        parent: props.parentId,
      }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        },
      })
      .then(() => {
        updateRequestStatus('SUCCESS');
        props.closeSubNodeAddDialog();
      })
      .catch((error) => {
        console.warn('ERR:', error)
        updateRequestStatus('FAILED');
      });
  };

  return (
    <AddCategoryNodeForm
      newNodeCategoryTitle={newCategoryTitle}
      newNodeCategoryTitleChangeHandler={onNewCategoryTitleChange}
      onAddTap={createCategoryNode}
    />
  );
};

export default AddCategoryNodeFormContainer;

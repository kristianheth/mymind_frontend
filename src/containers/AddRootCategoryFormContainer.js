import React, { useState, useContext} from "react";
import axios from "axios";

import AddNewCategoryForm from "../components/AddNewCategoryForm";
import UserContext from "../context/userContext";

const AddRootCategoryFormContainer = (props) => {
  const [newCategoryTitle, changeNewCategoryTitle] = useState();
  const { user } = useContext(UserContext);

  const [requestStatus, updateRequestStatus] = useState('IDLE');

  const onNewCategoryTitleChange = (event) => {
    console.log('test');
    changeNewCategoryTitle(event.target.value);
  };

  const createRootCategory = () => {
    updateRequestStatus('STARTED');

    // Request API.
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/nodes`, {
        Type: "Category",
        CategoryName: newCategoryTitle,
      }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        },
      })
      .then(() => {
        updateRequestStatus('SUCCESS');
        props.closeInputWindow();
      })
      .catch((error) => {
        console.warn('ERR:', error)
        updateRequestStatus('FAILED');
      });
  };

  return (
    <AddNewCategoryForm
      newCategoryTitle={newCategoryTitle}
      onNewCategoryTitleChange={onNewCategoryTitleChange}
      onAddButtonClick={createRootCategory}
      requestStatus={requestStatus}
    />
  );
};

export default AddRootCategoryFormContainer;

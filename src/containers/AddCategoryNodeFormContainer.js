import React, { useState } from "react";
import AddCategoryNodeForm from "../components/AddCategoryNodeForm";

const AddCategoryNodeFormContainer = (props) => {
  const [newCategoryTitle, changeNewCategoryTitle] = useState();

  const onNewCategoryTitleChange = (event) => {
    changeNewCategoryTitle(event.target.value);
  };

  const onAddTap = () => {
    // Calling function from App.js (take all existing nodes and add a new one)
    props.addNewNode({ type: "category", title: newCategoryTitle });
    props.closeSubNodeAddDialog();
  };
  return (
    <AddCategoryNodeForm
      newNodeCategoryTitle={newCategoryTitle}
      newNodeCategoryTitleChangeHandler={onNewCategoryTitleChange}
      onAddTap={onAddTap}
    />
  );
};

export default AddCategoryNodeFormContainer;

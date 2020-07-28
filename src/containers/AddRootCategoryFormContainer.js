import React, { useState } from "react";

import AddNewCategoryForm from "../components/AddNewCategoryForm";

const AddRootCategoryFormContainer = (props) => {
  const [newCategoryTitle, changeNewCategoryTitle] = useState();

  const onNewCategoryTitleChange = (event) => {
    changeNewCategoryTitle(event.target.value);
  };

  const onAddButtonClick = () => {
    // Calling function from App.js (take all existing nodes and add a new one)
    props.addNewNode({ type: "category", title: newCategoryTitle });
  };

  return (
    <AddNewCategoryForm
      newCategoryTitle={newCategoryTitle}
      onNewCategoryTitleChange={onNewCategoryTitleChange}
      onAddButtonClick={onAddButtonClick}
    />
  );
};

export default AddRootCategoryFormContainer;

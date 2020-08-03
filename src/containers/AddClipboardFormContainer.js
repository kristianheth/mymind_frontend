import React, { useState } from "react";
import AddClipboardForm from "../components/AddClipboardForm";

const AddClipboardFormContainer = (props) => {
  //   const [newCategoryTitle, changeNewCategoryTitle] = useState();

  //   const onNewCategoryTitleChange = (event) => {
  //     changeNewCategoryTitle(event.target.value);
  //   };

  //   const onAddTap = () => {
  //     // Calling function from App.js (take all existing nodes and add a new one)
  //     props.addNewNode({ type: "clipboard", title: newClipboardTitle });
  //     props.closeSubNodeAddDialog();
  //   };
  return (
    <AddClipboardForm
    //   newNodeCategoryTitle={newCategoryTitle}
    //   newNodeCategoryTitleChangeHandler={onNewCategoryTitleChange}
    //   onAddTap={onAddTap}
    />
  );
};

export default AddClipboardFormContainer;

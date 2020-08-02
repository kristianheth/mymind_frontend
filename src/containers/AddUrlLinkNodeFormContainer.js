import React, { useState } from "react";
import AddUrlLinkNodeForm from "../components/AddUrlLinkNodeForm";

const AddUrlLinkNodeFormContainer = (props) => {
  const [newLinkTitle, changeNewLinkTitle] = useState();
  const [newLinkUrl, changeNewLinkUrl] = useState();

  const newNodeLinkTitleChangeHandler = (event) => {
    changeNewLinkTitle(event.target.value);
  };

  const newNodeLinkUrlChangeHandler = (event) => {
    changeNewLinkUrl(event.target.value);
  };

  const onAddTap = () => {
    // Calling function from App.js (take all existing nodes and add a new one)
    props.addNewNode({ type: "url link", title: newLinkTitle });
  };

  return (
    <AddUrlLinkNodeForm
      newNodeLinkTitle={newLinkTitle}
      newNodeLinkTitleChangeHandler={newNodeLinkTitleChangeHandler}
      newNodeLinkUrl={newLinkUrl}
      newNodeLinkUrlChangeHandler={newNodeLinkUrlChangeHandler}
      onAddTap={onAddTap}
    />
  );
};

export default AddUrlLinkNodeFormContainer;

import React, { useState } from "react";
import AddAttachmentNodeForm from "../components/AddAttachmentNodeForm";

const AddAttachmentNodeFormContainer = (props) => {
  const [newNodeFile, changeNewNodeFile] = useState();

  const onAttachFileTap = (event) => {
    changeNewNodeFile(event.target.value);
  };

  const onUploadTap = () => {
    props.addNewNode({ type: "attachment", title: newNodeFile });
  };

  return (
    <AddAttachmentNodeForm
      newNodeFile={newNodeFile}
      onAttachFileTap={onAttachFileTap}
      onUploadTap={onUploadTap}
    />
  );
};

export default AddAttachmentNodeFormContainer;

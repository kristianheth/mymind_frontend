import React from "react";
import PropTypes from "prop-types";

import "./AddAttachmentNodeForm.css";

const AddAttachmentNodeForm = (props) => {
  return (
    <div className="add-attachment-node-form">
      <button onClick={props.onUploadTap}>Attach file</button>
    </div>
  );
};

AddAttachmentNodeForm.propTypes = {
  newNodeFile: PropTypes.string,
  onAttachFileTap: PropTypes.func,
  onUploadTap: PropTypes.func,
};

export default AddAttachmentNodeForm;

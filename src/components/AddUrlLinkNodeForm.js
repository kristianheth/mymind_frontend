import React from "react";
import PropTypes from "prop-types";

const AddUrlLinkNodeForm = (props) => {
  return <div className="add-url-link-node-form">AddUrlLinkNodeForm</div>;
};

AddUrlLinkNodeForm.propTypes = {
  newNodeLinkTitle: PropTypes.string,
  newNodeLinkTitleChangeHandler: PropTypes.func,
  newNodeLinkUrl: PropTypes.string,
  newNodeLinkUrlChangeHandler: PropTypes.func,
  onAddTap: PropTypes.func,
};

export default AddUrlLinkNodeForm;

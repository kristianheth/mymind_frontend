import React from "react";
import PropTypes from "prop-types";

import "./AddUrlLinkNodeForm.css";

const AddUrlLinkNodeForm = (props) => {
  return (
    <div className="add-url-link-node-form">
      <div>
        <input
          className="add-url-link-node-form__text-input"
          type="text"
          value={props.newNodeLinkTitle}
          onChange={props.newNodeLinkTitleChangeHandler}
          id="link-name"
          placeholder="link name"
        />
        <input
          className="add-url-link-node-form__text-input"
          type="text"
          value={props.newNodeLinkUrl}
          onChange={props.newNodeLinkUrlChangeHandler}
          id="url"
          placeholder="url"
        />
        <button onClick={props.onAddTap}>Add</button>
      </div>
    </div>
  );
};

AddUrlLinkNodeForm.propTypes = {
  newNodeLinkTitle: PropTypes.string,
  newNodeLinkTitleChangeHandler: PropTypes.func,
  newNodeLinkUrl: PropTypes.string,
  newNodeLinkUrlChangeHandler: PropTypes.func,
  onAddTap: PropTypes.func,
};

export default AddUrlLinkNodeForm;

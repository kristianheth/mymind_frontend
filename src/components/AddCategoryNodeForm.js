import React from "react";
import PropTypes from "prop-types";

import "./AddCategoryNodeForm.css";

const AddCategoryNodeForm = (props) => {
  return (
    <div className="add-category-node-form">
      <input
        className="add-category-node-form__text-input"
        type="text"
        value={props.newNodeCategoryTitle}
        onChange={props.newNodeCategoryTitleChangeHandler}
        id="category"
        placeholder="type category"
      />

      <button
        className="add-category-node-form__button"
        onClick={props.onAddTap}
      >
        Add
        </button>
    </div>
  );
};

AddCategoryNodeForm.propTypes = {
  newNodeCategoryTitle: PropTypes.string,
  newNodeCategoryTitleChangeHandler: PropTypes.func,
  onAddTap: PropTypes.func,
};

export default AddCategoryNodeForm;

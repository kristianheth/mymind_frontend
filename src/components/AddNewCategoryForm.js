import React from "react";
import PropTypes from "prop-types";

import "./AddNewCategoryForm.css";

const AddNewCategoryForm = (props) => {
  return (
    <div className="add-new-category-form">
      <label>Add new category</label>
      <div className="add-new-category-form__text-input">
        <input
          type="text"
          value={props.newCategoryTitle}
          onChange={props.onNewCategoryTitleChange}
          id="category"
          placeholder="type category"
        />
      </div>
      <button
        className="add-new-category-form__button"
        onClick={props.onAddButtonClick}
      >
        Add
      </button>
    </div>
  );
};

AddNewCategoryForm.propTypes = {
  newCategoryTitle: PropTypes.string,
  onNewCategoryTitleChange: PropTypes.func,
  onAddButtonClick: PropTypes.func,
  onCloseButtonClick: PropTypes.func,
};

export default AddNewCategoryForm;

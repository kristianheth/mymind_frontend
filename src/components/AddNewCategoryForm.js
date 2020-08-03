import React from "react";
import PropTypes from "prop-types";

const AddNewCategoryForm = (props) => {
  return (
    <div className="add-new-category-form">
      <label>Add new category</label>
      <input
        type="text"
        value={props.newCategoryTitle}
        onChange={props.onNewCategoryTitleChange}
        id="category"
        placeholder="type category"
      />
      <button onClick={props.onAddButtonClick}>Add</button>
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

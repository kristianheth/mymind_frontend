import React from "react";
import PropTypes from "prop-types";

const AddNewCategoryForm = () => {
  return (
    <div className="add-new-category-form">
      <form>
        <label>Add new category</label>
        <input type="text" id="category" placeholder="type category" />
        <button>Add</button>
      </form>
    </div>
  );
};

AddNewCategoryForm.propTypes = {
  newCategoryTitle: PropTypes.string,
};

export default AddNewCategoryForm;

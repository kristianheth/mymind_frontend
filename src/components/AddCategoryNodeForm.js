import React from "react";
import PropTypes from "prop-types";

const AddCategoryNodeForm = () => {
  return <div className="add-category-node-form">AddCategoryNodeForm</div>;
};

AddCategoryNodeForm.propTypes = {
  newNodeCategoryTitle: PropTypes.string,
  newNodeCategoryTitleChangeHandler: PropTypes.func,
  onAddTap: PropTypes.func,
};

export default AddCategoryNodeForm;

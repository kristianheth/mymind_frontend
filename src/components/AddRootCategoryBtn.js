import React from "react";
import PropTypes from "prop-types";

import "./AddRootCategoryBtn.css";

const AddRootCategoryBtn = (props) => {
  return (
    <button className="add-root-category-btn" onClick={props.onClick}>
      +
    </button>
  );
};

AddRootCategoryBtn.propTypes = {
  onClick: PropTypes.func,
};

export default AddRootCategoryBtn;

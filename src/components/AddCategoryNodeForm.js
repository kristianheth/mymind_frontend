import React from "react";
import PropTypes from "prop-types";

import "./AddCategoryNodeForm.css";

const AddCategoryNodeForm = (props) => {
  return (
    <div className="add-category-node-form">
      <div>
        <label>Type category</label>

        <input
          type="text"
          value={props.newNodeCategoryTitle}
          onChange={props.newNodeCategoryTitleChangeHandler}
          id="category"
          placeholder="type category"
        />
        <button onClick={props.onAddTap}>Add</button>
      </div>
    </div>
  );
};

AddCategoryNodeForm.propTypes = {
  newNodeCategoryTitle: PropTypes.string,
  newNodeCategoryTitleChangeHandler: PropTypes.func,
  onAddTap: PropTypes.func,
};

export default AddCategoryNodeForm;

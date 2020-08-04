import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./AddRootCategoryBtn.css";

// import DialogsContext from "../context/dialogsContext";

const AddRootCategoryBtn = (props) => {
  // const { dialogsOpen, changeDialogsOpen } = useContext(DialogsContext);

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

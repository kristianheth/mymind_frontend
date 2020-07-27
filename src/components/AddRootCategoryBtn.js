import React, { useContext } from "react";
import PropTypes from "prop-types";

import DialogsContext from '../context/dialogsContext';

const AddRootCategoryBtn = () => {
  const { dialogsOpen, changeDialogsOpen } = useContext(DialogsContext);

  return (
    <button
      className="add-root-category-btn"
      onClick={() => { changeDialogsOpen({
        ...dialogsOpen,
        rootCategoryAddDialogOpen: !dialogsOpen.rootCategoryAddDialogOpen,
      }) }}
    >
      AddRootCategoryBtn
    </button>
  );
};

AddRootCategoryBtn.propTypes = {
  onClick: PropTypes.func,
};

export default AddRootCategoryBtn;

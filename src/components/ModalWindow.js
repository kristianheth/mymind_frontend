import React from "react";

import "./ModalWindow.css";

const ModalWindow = (props) => {
  return <div className="modal-window">{props.children}</div>;
};

export default ModalWindow;

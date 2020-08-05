import React from "react";

import "./ModalWindow.css";

const ModalWindow = (props) => {
  return (
    <div className="modal-window">
      <div className="modal-window__content">
        {props.children}
      </div>

      {props.onCloseClick && (
        <div className="modal-window__buttons">
          <button
            className="modal-window__button"
            onClick={props.onCloseClick}
          >
            Close
        </button>
        </div>
      )}
    </div>
  );
};

export default ModalWindow;

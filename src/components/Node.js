import React from "react";
import PropTypes from "prop-types";

import "./Node.css";

const Node = (props) => {
  return (
    <div onClick={props.onTapToSelect} className="node">
      {props.CategoryName}

      <div>
        {props.selected ? (
          <div className="node-selected">
            <button onClick={props.onEditTap}>Edit</button>
            <button onClick={props.onDeleteTap}>Delete</button>
            <button onClick={props.onAddSubnode}>Add subnode</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Node.propTypes = {
  Type: PropTypes.string,
  CategoryName: PropTypes.string,
  expanded: PropTypes.bool,
  selected: PropTypes.bool,
  children: PropTypes.array,

  onTapToSelect: PropTypes.func,

  onEditTap: PropTypes.func,
  onDeleteTap: PropTypes.func,
  onAddSubnode: PropTypes.func,

  onToggleExpandTap: PropTypes.func,
};

export default Node;

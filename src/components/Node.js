import React from "react";
import PropTypes from "prop-types";

const Node = (props) => {
  return (
    <div onClick={props.onTapToSelect} className="node">
      {props.CategoryName}
      {/* {props.selected ? "Show buttons" : ""} */}
      <div>
        {props.selected ? (
          <div className="node-selected">
            <button onClick={props.openNewNodeDialog}>Edit</button>
            <button onClick={props.openNewNodeDialog}>Delete</button>
            <button onClick={props.openNewNodeDialog}>Add subnode</button>
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

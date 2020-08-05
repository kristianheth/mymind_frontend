import React from "react";
import PropTypes from "prop-types";
import NodeChildContainer from "../containers/NodeChildContainer";

import "./Node.css";

const Node = ({
  onTapToSelect,
  CategoryName,
  selected,
  onEditTap,
  onDeleteTap,
  onAddSubnode,
  id,
  counter,
  onToggleExpandTap,
  expanded,
}) => {
  return (
    <div>
      <div onClick={onTapToSelect} className="node">

        {CategoryName}

        <div >
          {selected ? (
            <div className="node-selected">
              <button onClick={onEditTap}>Edit</button>
              <button onClick={() => onDeleteTap(id)}>Delete</button>
              <button onClick={() => onAddSubnode(id)}>Add subnode</button>
            </div>
          ) : (
              ""
            )}
        </div>
      </div>


      <div
        onClick={onToggleExpandTap}
        className={counter > 0 ? "node-counter" : null}
      >
        {expanded
          ? 'Collapse'
          : counter > 0 ? counter : null
        }
      </div>

      {expanded && (
        <div className="node-child">
          <NodeChildContainer parentId={id} onAddSubnode={onAddSubnode} />
        </div>
      )}
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

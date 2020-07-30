import React from "react";
import PropTypes from "prop-types";

import NodeContainer from "../containers/NodeContainer";

const NodesDisplay = (props) => {
  return (
    <div className="nodes-display">
      {/* NodesDisplay */}
      {props.nodes.map((node, key) => (
        <NodeContainer key={key} CategoryName={node.CategoryName} />
      ))}
    </div>
  );
};

NodesDisplay.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

export default NodesDisplay;

import React from "react";
import PropTypes from "prop-types";

import NodeContainer from "../containers/NodeContainer";

const NodesDisplay = ({ nodes = [], onAddSubnode}) => {
  return (
    nodes.map((node, key) => (
      <NodeContainer
        key={node.id}
        counter={node.children.length}
        CategoryName={node.CategoryName}
        id={node.id}
        onAddSubnode={onAddSubnode}
      />
    ))
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
    })
  ),
  onTapToSelect: PropTypes.func,

  onEditTap: PropTypes.func,
  onDeleteTap: PropTypes.func,
  onAddSubnode: PropTypes.func,

  onToggleExpandTap: PropTypes.func,
};

export default NodesDisplay;

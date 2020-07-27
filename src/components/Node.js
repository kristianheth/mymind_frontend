import React from "react";
import PropTypes from "prop-types";

const Node = () => {
  return <div className="node">Node</div>;
};

Node.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
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

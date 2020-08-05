import React, { useState } from "react";
import Node from "../components/Node";

import "./NodeContainer.css";

const NodeContainer = (props) => {
  const [selected, changeSelected] = useState(false);
  const [expanded, changeExpanded] = useState(false);
  const { counter, ...restProps } = props;

  const toggleSelected = () => {
    changeSelected(!selected);
  };

  const toggleExpanded = (event) => {
    event.stopPropagation();
    changeExpanded(!expanded);
  };

  return (
    <Node
      selected={selected}
      onTapToSelect={toggleSelected}
      onToggleExpandTap={toggleExpanded}
      expanded={expanded}
      counter={counter}
      {...restProps}
    />
  );
};

export default NodeContainer;

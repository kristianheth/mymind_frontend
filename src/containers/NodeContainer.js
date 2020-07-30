import React, { useState } from "react";
import Node from "../components/Node";

const NodeContainer = (props) => {
  const [selected, changeSelected] = useState(false);

  const toggleSelected = () => {
    changeSelected(!selected);
  };

  return (
    <div className="node-container">
      <Node selected={selected} onTapToSelect={toggleSelected} {...props} />
    </div>
  );
};

export default NodeContainer;

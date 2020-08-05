import React, { useState } from "react";
import Node from "../components/Node";

import "./NodeContainer.css";

const NodeContainer = (props) => {
  const [selected, changeSelected] = useState(false);
  const { children, ...restProps } = props;

  const toggleSelected = () => {
    changeSelected(!selected);
  };

  return (
    <div>
      <div className="node-container">
        <Node selected={selected} onTapToSelect={toggleSelected} {...restProps} />
        <div className={children > 0 ? "node-container-counter" : null}>
          {children > 0 ? children : null}
        </div>
      </div>
    </div>
  );
};

export default NodeContainer;

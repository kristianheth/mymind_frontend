import React, { useState } from "react";
import Node from "../components/Node";

import "../components/Node.css";

const NodeContainer = (props) => {
  const [selected, changeSelected] = useState(false);

  const toggleSelected = () => {
    changeSelected(!selected);
  };

  return (
    <div>
      <div className="node-container">
        <Node selected={selected} onTapToSelect={toggleSelected} {...props} />
        <div className={props.children > 0 ? "node-container-counter" : null}>
          {props.children > 0 ? props.children : null}
        </div>
      </div>
    </div>
  );
};

export default NodeContainer;

import React, { useState } from "react";

import NodesDisplay from "../components/NodesDisplay";
import "./NodesDisplayContainer.css";

const NodesDisplayContainer = (props) => {
  const [nodes, updateNodes] = useState([]);

  return (
    <div className="nodes-display-container">
      <NodesDisplay
        nodes={props.nodes}
        onAddSubnode={props.openNewNodeDialog}
      />

      {/* <button>+</button> */}
    </div>
  );
};

export default NodesDisplayContainer;

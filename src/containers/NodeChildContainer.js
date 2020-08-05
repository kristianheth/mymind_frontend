import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import NodeContainer from "../containers/NodeContainer";
import UserContext from "../context/userContext";

import "./NodeChildContainer.css";

const NodeChildContainer = ({ parentId, onAddSubnode }) => {
  const [childrenNodes, changeChildrenNodes] = useState([]);
  const [selected, changeSelected] = useState(false);
  const [expanded, changeExpanded] = useState(false);

  const [requestStatus, updateRequestStatus] = useState("IDLE");
  const [errorMessage, updateErrorMessage] = useState();

  const { user } = useContext(UserContext);

  const toggleSelected = () => {
    changeSelected(!selected);
  };

  const toggleExpanded = () => {
    changeExpanded(!expanded);
  };

  const deleteNode = (nodeId) => {
    updateRequestStatus("STARTED");

    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/nodes/${nodeId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        fetchNodes();
        updateRequestStatus("SUCCESS");
      })
      .catch(() => {
        updateRequestStatus("FAILED");
      });
  };

  const fetchNodes = () => {
    updateRequestStatus("STARTED");

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/nodes?parent=${parentId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        changeChildrenNodes(response.data);
        updateRequestStatus("SUCCESS");
      })
      .catch((error) => {
        const { data } = error.response.data;

        const errMessage = data
          .map(({ messages }) => {
            const messagesAsLines = messages
              .map(({ message }) => message)
              .join("\n");
            return messagesAsLines;
          })
          .join("");

        updateErrorMessage(errMessage);
        updateRequestStatus("FAILED");
      });
  };

  useEffect(() => {
    fetchNodes();
  }, []); // eslint-disable-line

  return (
    <>
      {requestStatus === "STARTED" && "Loading sub-nodes..."}
      {requestStatus === "SUCCESS" && (
        <div className="nodes-display">
          {childrenNodes.map((node) => (
            <NodeContainer
              key={node.id}
              counter={node.children.length}
              CategoryName={node.CategoryName}
              LinkName={node.LinkName}
              LinkUrl={node.LinkUrl}
              id={node.id}
              onAddSubnode={onAddSubnode}
              onDeleteTap={deleteNode}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NodeChildContainer;

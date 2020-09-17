import React, { useState, useContext } from 'react';
import axios from 'axios';
import Node from '../components/Node';
import UserContext from '../context/userContext';

import './NodeContainer.css';

const NodeContainer = ({ fetchNodes, ...props }) => {
  const [selected, changeSelected] = useState(false);
  const [expanded, changeExpanded] = useState(false);
  const { counter, ...restProps } = props;

  const [requestStatus, updateRequestStatus] = useState('IDLE');
  const [errorMessage, updateErrorMessage] = useState();

  const { user } = useContext(UserContext);

  const toggleSelected = () => {
    changeSelected(!selected);
  };

  const toggleExpanded = (event) => {
    event.stopPropagation();
    changeExpanded(!expanded);
  };

  const deleteNode = (nodeId) => {
    updateRequestStatus('STARTED');

    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/nodes/${nodeId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then(() => {
        fetchNodes();
        updateRequestStatus('SUCCESS');
      })
      .catch((error) => {
        const { data } = error.response.data;

        const errMessage = data
          .map(({ messages }) => {
            const messagesAsLines = messages
              .map(({ message }) => message)
              .join('\n');
            return messagesAsLines;
          })
          .join('');

        updateErrorMessage(errMessage);
        updateRequestStatus('FAILED');
      });
  };

  return (
    <>
      <Node
        selected={selected}
        onTapToSelect={toggleSelected}
        onToggleExpandTap={toggleExpanded}
        onDeleteTap={deleteNode}
        expanded={expanded}
        counter={counter}
        {...restProps}
      />
    </>
  );
};

export default NodeContainer;

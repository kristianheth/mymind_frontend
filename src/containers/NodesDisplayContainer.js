import React from 'react';
import NodesDisplay from '../components/NodesDisplay';
import './NodesDisplayContainer.css';

const NodesDisplayContainer = ({ nodes, openNewNodeDialog, fetchNodes }) => {
  return (
    <div className='nodes-display-container'>
      <NodesDisplay
        nodes={nodes}
        onAddSubnode={openNewNodeDialog}
        fetchNodes={fetchNodes}
      />
    </div>
  );
};

export default NodesDisplayContainer;

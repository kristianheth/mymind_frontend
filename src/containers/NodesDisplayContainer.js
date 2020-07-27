import React, { useState } from 'react';

import NodesDisplay from '../components/NodesDisplay';

const NodesDisplayContainer = (props) => {
    const [ nodes, updateNodes ] = useState([]);

    return (
        <div className="nodes-display">
            <NodesDisplay nodes={nodes} />
            <button onClick={props.openNewNodeDialog}>+</button>
        </div>
    )
};

export default NodesDisplayContainer;

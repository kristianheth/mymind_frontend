import React from 'react';
import PropTypes from 'prop-types';

import Node from './Node';

const NodesDisplay = () => {
    return (
        <div className="nodes-display">
            NodesDisplay

            <Node />
        </div>
    );
};

NodesDisplay.propTypes = {
    nodes: PropTypes.arrayOf(
        PropTypes.shape({
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
          }),
    ),
};

export default NodesDisplay;

import React from 'react';
// import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import NodeChildContainer from '../containers/NodeChildContainer';
import collapse from './collapse.png';

// import * as d3 from 'd3';

import './Node.css';

const Node = ({
  onTapToSelect,
  CategoryName,
  selected,
  onEditTap,
  onDeleteTap,
  onAddSubnode,
  id,
  counter,
  onToggleExpandTap,
  expanded,
  LinkName,
  LinkUrl,
}) => {
  // const ref = useRef();

  // useEffect(() => {
  //   const svgElement = d3.select(ref.current);
  //   svgElement
  //     .selectAll('circle')
  //     .data(id)
  //     .text(CategoryName)
  //     .join('circle')
  //     .attr('cx', 40)
  //     .attr('cy', 40)
  //     .attr('r', 40)
  //     .attr('fill', 'rgba(10, 225, 101, 0.2)');
  // }, []);

  return (
    <div className='node__wrapper'>
      {/* <svg ref={ref} /> */}
      <div onClick={onTapToSelect} className='node'>
        <div className='node-category'>{CategoryName}</div>

        <div className='node-link'>
          <a href={LinkUrl} target='_blank'>
            {LinkName}
          </a>
        </div>
        <div>
          {selected ? (
            <div className='node-selected'>
              <button onClick={onEditTap}>Edit</button>
              <button onClick={() => onDeleteTap(id)}>Delete</button>
              <button onClick={() => onAddSubnode(id)}>Add subnode</button>
            </div>
          ) : (
            ''
          )}
        </div>

        <div
          onClick={onToggleExpandTap}
          className={counter > 0 ? 'node-counter' : null}
        >
          {expanded ? (
            <img src={collapse} className='node-expanded' />
          ) : counter > 0 ? (
            counter
          ) : null}
        </div>
      </div>

      <div className='node__children'>
        {expanded && (
          <div className='node-child'>
            <NodeChildContainer parentId={id} onAddSubnode={onAddSubnode} />
          </div>
        )}
      </div>
    </div>
  );
};

Node.propTypes = {
  Type: PropTypes.string,
  CategoryName: PropTypes.string,
  LinkName: PropTypes.string,
  LinkUrl: PropTypes.string,
  expanded: PropTypes.bool,
  selected: PropTypes.bool,
  children: PropTypes.array,

  onTapToSelect: PropTypes.func,

  onEditTap: PropTypes.func,
  onDeleteTap: PropTypes.func,
  onAddSubnode: PropTypes.func,

  onToggleExpandTap: PropTypes.func,
};

export default Node;

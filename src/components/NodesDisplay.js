import React from 'react';
// import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import * as d3 from 'd3';

import NodeContainer from '../containers/NodeContainer';
// import { svg } from 'd3';

const NodesDisplay = ({ nodes = [], onAddSubnode, fetchNodes }) => {
  // const ref = useRef();

  // useEffect(() => {
  //   const data = nodes;

  //   let view;
  //   const width = 932;
  //   const height = width;

  //   let pack = (data) =>
  //     d3.pack().size([width, height]).padding(3)(
  //       d3.hierarchy(data)
  //       // .sum((d) => d.value)
  //       // .sort((a, b) => b.value - a.value)
  //     );

  //   const root = pack(data);
  //   let focus = root;

  //   const format = d3.format(',d');

  //   const color = d3
  //     .scaleLinear()
  //     .domain([0, 5])
  //     .range(['hsl(152,80%,80%)', 'hsl(228,30%,40%)'])
  //     .interpolate(d3.interpolateHcl);

  //   const svg = d3
  //     .create('svg')
  //     .attr('viewBox', `-${width / 2} -${height / 2} ${width} ${height}`)
  //     .style('display', 'block')
  //     .style('margin', '0 -14px')
  //     .style('background', color(0))
  //     .style('cursor', 'pointer')
  //     .on('click', (event) => zoom(event, root));

  //   const node_canvas = svg
  //     .append('g')
  //     .selectAll('circle')
  //     .data(root.descendants().slice(1))
  //     .join('circle')
  //     .attr('fill', (d) => (d.children ? color(d.depth) : 'white'))
  //     .attr('pointer-events', (d) => (!d.children ? 'none' : null))
  //     .on('mouseover', function () {
  //       d3.select(this).attr('stroke', '#000');
  //     })
  //     .on('mouseout', function () {
  //       d3.select(this).attr('stroke', null);
  //     })
  //     .on(
  //       'click',
  //       (event, d) => focus !== d && (zoom(event, d), event.stopPropagation())
  //     );

  //   const label = svg
  //     .append('g')
  //     .style('font', '10px sans-serif')
  //     .attr('pointer-events', 'none')
  //     .attr('text-anchor', 'middle')
  //     .selectAll('text')
  //     .data(root.descendants())
  //     .join('text')
  //     .style('fill-opacity', (d) => (d.parent === root ? 1 : 0))
  //     .style('display', (d) => (d.parent === root ? 'inline' : 'none'))
  //     .text((d) => d.data.CategoryName);

  //   zoomTo([root.x, root.y, root.r * 2]);

  //   function zoomTo(v) {
  //     const k = width / v[2];

  //     view = v;

  //     label.attr(
  //       'transform',
  //       (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
  //     );
  //     node_canvas.attr(
  //       'transform',
  //       (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
  //     );
  //     node_canvas.attr('r', (d) => d.r * k);
  //   }

  //   function zoom(event, d) {
  //     const focus0 = focus;
  //     focus = d;

  //     const transition = svg
  //       .transition()
  //       .duration(event.altKey ? 7500 : 750)
  //       .tween('zoom', (d) => {
  //         const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
  //         return (t) => zoomTo(i(t));
  //       });

  //     label
  //       .filter(function (d) {
  //         return d.parent === focus || this.style.display === 'inline';
  //       })
  //       .transition(transition)
  //       .style('fill-opacity', (d) => (d.parent === focus ? 1 : 0))
  //       .on('start', function (d) {
  //         if (d.parent === focus) this.style.display = 'inline';
  //       })
  //       .on('end', function (d) {
  //         if (d.parent !== focus) this.style.display = 'none';
  //       });
  //   }
  // });

  return nodes.map((node) => (
    <NodeContainer
      key={node.id}
      counter={node.children.length}
      CategoryName={node.CategoryName}
      id={node.id}
      onAddSubnode={onAddSubnode}
      fetchNodes={fetchNodes}
    />
  ));
};

NodesDisplay.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      Type: PropTypes.string,
      CategoryName: PropTypes.string,
      expanded: PropTypes.bool,
      selected: PropTypes.bool,
      children: PropTypes.array,
    })
  ),
  onTapToSelect: PropTypes.func,

  onEditTap: PropTypes.func,
  onDeleteTap: PropTypes.func,
  onAddSubnode: PropTypes.func,

  onToggleExpandTap: PropTypes.func,
  fetchNodes: PropTypes.func,
};

export default NodesDisplay;

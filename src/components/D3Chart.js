import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
// import { hierarchy, root } from 'd3';

const D3Chart = (props) => {
  const data = props.nodes;

  const rootNode = d3.hierarchy(data);

  const packLayout = d3.pack();
  packLayout.size([300, 300]);

  rootNode.sum(function (d) {
    return d.value;
  });

  packLayout(rootNode);

  d3.select('svg g')
    .selectAll('circle')
    .data(rootNode.descendants())
    .enter()
    .append('circle')
    .attr('cx', function (d) {
      return d.x;
    })
    .attr('cy', function (d) {
      return d.y;
    })
    .attr('r', function (d) {
      return d.r;
    });

  let nodes = d3
    .select('svg g')
    .selectAll('g')
    .data(rootNode.descendants())
    .enter()
    .append('g')
    .attr('transform', function (d) {
      return 'translate(' + [d.x, d.y] + ')';
    });

  nodes.append('circle').attr('r', function (d) {
    return d.r;
  });

  nodes
    .append('text')
    .attr('dy', 4)
    .text(function (d) {
      return d.children === undefined ? d.data.name : '';
    });

  let view;
  const width = 932;
  const height = width;

  const root = d3.hierarchy(nodes);

  const packChart = d3.pack(nodes).size([width, height]).padding(3)(
    d3
      .hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value)
  );

  let focus = root;

  const format = () => {
    d3.format('d');
  };

  const color = d3
    .scaleLinear()
    .domain([0, 5])
    .range(['hsl(152,80%,80%)', 'hsl(228,30%,40%)'])
    .interpolate(d3.interpolateHcl);

  const svg = d3
    .create('svg')
    .attr('viewBox', `-${width / 2} -${height / 2} ${width} ${height}`)
    .style('display', 'block')
    .style('margin', '0 -14px')
    .style('background', color(0))
    .style('cursor', 'pointer')
    .on('click', () => zoom(root));

  const node = svg
    .append('g')
    .selectAll('circle')
    .data(root.descendants().slice(1))
    .join('circle')
    .attr('fill', (d) => (d.children ? color(d.depth) : 'white'))
    .attr('pointer-events', (d) => (!d.children ? 'none' : null))
    .on('mouseover', function () {
      d3.select(this).attr('stroke', '#000');
    })
    .on('mouseout', function () {
      d3.select(this).attr('stroke', null);
    })
    .on('click', (d) => focus !== d && (zoom(d), d3.event.stopPropagation()));

  const label = svg
    .append('g')
    .style('font', '10px sans-serif')
    .attr('pointer-events', 'none')
    .attr('text-anchor', 'middle')
    .selectAll('text')
    .data(root.descendants())
    .join('text')
    .style('fill-opacity', (d) => (d.parent === root ? 1 : 0))
    .style('display', (d) => (d.parent === root ? 'inline' : 'none'))
    .text((d) => d.data.name);

  zoomTo([root.x, root.y, root.r * 2]);

  function zoomTo(v) {
    const k = width / v[2];

    view = v;

    label.attr(
      'transform',
      (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
    );
    node.attr(
      'transform',
      (d) => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`
    );
    node.attr('r', (d) => d.r * k);
  }

  function zoom(d) {
    const focus0 = focus;

    focus = d;

    const transition = svg
      .transition()
      .duration(d3.event.altKey ? 7500 : 750)
      .tween('zoom', (d) => {
        const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
        return (t) => zoomTo(i(t));
      });

    label
      .filter(function (d) {
        return d.parent === focus || this.style.display === 'inline';
      })
      .transition(transition)
      .style('fill-opacity', (d) => (d.parent === focus ? 1 : 0))
      .on('start', function (d) {
        if (d.parent === focus) this.style.display = 'inline';
      })
      .on('end', function (d) {
        if (d.parent !== focus) this.style.display = 'none';
      });
  }

  useEffect(() => {
    packLayout();
  }, []);

  return nodes.svg();
};

D3Chart.propTypes = {
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

export default D3Chart;

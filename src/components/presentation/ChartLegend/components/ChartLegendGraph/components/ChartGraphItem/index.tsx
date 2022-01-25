import React from 'react';
import { ChartDataItems } from '../../../../../../../models/Charts/ChartsModel';

interface ChartGraphItemProps {
  items?: ChartDataItems[]
}

const ChoroplethLine = ({items}: ChartGraphItemProps)  => {
  return (
    <div className='legend-graph_line'>
      {items?.map(({ color }) => <div key={color} className='legend-graph_line_item --choropleth' style={{ backgroundColor: color }} />)}
    </div>
  )
}

const BasicPoints = ({items}: ChartGraphItemProps) => {
  return (
    <div className='legend-graph_line --basic'>
      {items?.map(({ color, name }) => (
        <div key={color} className='legend-graph_line_item --basic'>
          <div
            className='legend-graph_line_item_circle'
            style={{ backgroundColor: color }}
          />
          <div className='legend-graph_line_item'>
            <span>{name}</span>
          </div>
        </div>
      ))}
    </div>
  )
};

const GradientLine = ({items}: ChartGraphItemProps) => {
  const gradient = items?.map(({ color }) => color).join(",");
  return (
    <div
      className='legend-graph_line'
      style={{ background: `linear-gradient(to right, ${gradient})` }}
    />
  )
}

export {ChoroplethLine, GradientLine, BasicPoints};

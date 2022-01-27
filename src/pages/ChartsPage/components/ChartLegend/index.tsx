import React from 'react';
import "./index.scss"

import ChartLegendHeader from './components/ChartLegendHeader';
import ChartLegendGraph from './components/ChartLegendGraph';
import ChartLegendInfo from './components/ChartLegendInfo';

const ChartLegend = () => {
  return (
    <div className='chart-legend'>
      <ChartLegendHeader />
      <ChartLegendGraph />
      <ChartLegendInfo />
    </div>
  );
};

export default ChartLegend;

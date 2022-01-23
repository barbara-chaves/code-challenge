import React from 'react';
import ChartLegendDescription from './components/ChartLegendDescription';
import ChartLegendHeader from './components/ChartLegendHeader';
import ChartLegendLine from './components/ChartLegendLine';

const ChartLegend = () => {
  return (
    <div>
      <ChartLegendHeader />
      <ChartLegendDescription />
      <ChartLegendLine />
    </div>
  );
};

export default ChartLegend;

import React from 'react';

import { ChartContextProvider } from '../../stores/chartDataStore/context';
import Chart from './components/ChartLegendsList';

const ChartPage = () => {
  return (
    <div>
      <h1>Legends</h1>
      <ChartContextProvider>
        <Chart />
      </ChartContextProvider>
    </div>
  )
};

export default ChartPage;

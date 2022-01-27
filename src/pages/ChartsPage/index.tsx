import React from 'react';

import Chart from '../../components/Chart';
import { ChartContextProvider } from '../../stores/chartDataStore/context';

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

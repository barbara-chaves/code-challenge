import React from 'react';

import { chartInitialState, chartReducer } from '../../../stores/chartStore';
import { StoreProvider } from '../../../stores/Store';

import Chart from '../../presentation/Chart';

const Charts = () => {
  return (
    <StoreProvider
      initialState={chartInitialState}
      recucer={chartReducer}
    >
      <div>
        <Chart />
      </div>
    </StoreProvider>
  )
};

export default Charts;

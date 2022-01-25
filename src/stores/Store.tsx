import React from 'react';
import ChartStore from './chartStore';

const storeInitializer = {
  chartStore: new ChartStore()
}

const Stores = React.createContext(storeInitializer.chartStore);
Stores.displayName = 'Store';

export const useStore = () => React.useContext(Stores);

export const StoreProvider = ({ children, initialState, reducer }:any) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Stores.Provider value={[globalState, dispatch] as any}>{children}</Stores.Provider>
  );
};

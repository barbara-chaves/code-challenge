import React, { createContext, useReducer } from "react";
import ChartData from "../../models/Charts/ChartsModel";
import { reducer } from "./reducer";

export interface ChartStateI {
  chartData: ChartData[];
}

const initialState = {
  chartData: []
}

const ChartDataContext = createContext<{
  state: ChartStateI;
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

ChartDataContext.displayName = "ChartDataContext"

const ChartContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ChartDataContext.Provider value={{ state, dispatch }}>
      {children}
    </ChartDataContext.Provider>
  )
}

export { ChartDataContext, ChartContextProvider }
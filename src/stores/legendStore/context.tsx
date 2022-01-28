import React, { createContext, useReducer } from "react";
import ChartData from "../../models/Charts/ChartsModel";
import { reducer } from "./reducer";

export interface ChartStateI {
  chartData: ChartData[];
}

export interface LegendState {
  visibility: boolean;
  collapse: boolean;
  showInfo: boolean;
  dates: number[];
  chartData?: ChartData;
  dragProps?: any;
}

const initialState = {
  visibility: false,
  collapse: false,
  showInfo: false,
  dates: [],
  chartData: undefined,
  dragProps: undefined
}

const LegendContext = createContext<{
  state: LegendState;
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null
});

LegendContext.displayName ="LegendContext" 

interface LegendProviderProps {
  children: JSX.Element;
  chartData: ChartData;
  dragProps: any
}

const LegendProvider = ({ children, chartData, dragProps }: LegendProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, chartData, dragProps });
  return (
    <LegendContext.Provider value={{ state, dispatch }}>
      {children}
    </LegendContext.Provider>
  )
}

export { LegendContext, LegendProvider }
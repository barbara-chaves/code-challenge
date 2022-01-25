import { ReducerWithoutAction } from "react";
import ChartData from "../models/Charts/ChartsModel";
import chartService from "../services/chart/chartService";

// An enum with all the types of actions to use in our reducer
export enum ChartActionTypes {
  GET_DATA = "GET_DATA",
  GET_FAKE_FAKE = "GET_FAKE_FAKE",
}

// An interface for our actions
interface ChartAction {
  type: ChartActionTypes;
  payload?: number;
}

// An interface for our state
interface ChartState {
  chartData: ChartData[];
}

export const chartInitialState: ChartState = {
  chartData: [],
};

// Our reducer function that uses a switch statement to handle our actions
export async function chartReducer(state = chartInitialState, action: ChartAction){
  const { type, payload } = action;
  switch (type) {
    case ChartActionTypes.GET_DATA:
      return {
        ...state,
        chartData: await chartService.getChartsData(),
      };
    
    default:
      return state;
  }
}

export default class ChartStore {
  state = chartInitialState;

  reducer = chartReducer
}
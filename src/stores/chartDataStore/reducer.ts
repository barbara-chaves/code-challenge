import { ChartStateI } from "./context";

export enum ChartActionTypes {
  GET_DATA = "GET_DATA",
  CHANGE_DATA_POSITION = "CHANGE_DATA_POSITION",
}

interface ChartAction {
  type: ChartActionTypes;
  payload?: any;
}

export const reducer = (state: ChartStateI, action: ChartAction) => {
  const { type, payload } = action;
  switch (type) {
    case ChartActionTypes.GET_DATA:
      return {
        ...state,
        chartData: payload,
      };
    case ChartActionTypes.CHANGE_DATA_POSITION:
      return {
        ...state,
        chartData: payload,
      };

    default:
      return state;
  }
};
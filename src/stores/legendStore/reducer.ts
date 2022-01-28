import { LegendState } from "./context";

export enum LegendActionsTypes {
  setVisibility = "setVisibility",
  setCollapse = "setCollapse",
  setShowInfo = "setShowInfo",
  setDates = "setDates",
  setChartData = "setChartData",
  setDragProps = "setDragProps",
}

export interface LegendActions {
  payload?: any;
  type: LegendActionsTypes;
}

export const  reducer = (state: LegendState, action: LegendActions) => {
  const { type, payload } = action;
  switch (type) {
    case LegendActionsTypes.setChartData:
      return {
        ...state,
        chartData: payload,
      };
    case LegendActionsTypes.setDragProps:
      return {
        ...state,
        dragProps: payload,
      };
    case LegendActionsTypes.setVisibility:
      return {
        ...state,
        visibility: !state.visibility,
      };
    case LegendActionsTypes.setCollapse:
      return {
        ...state,
        collapse: !state.collapse,
      };
    case LegendActionsTypes.setShowInfo:
      return {
        ...state,
        showInfo: !state.showInfo,
      };
    case LegendActionsTypes.setDates:
      return {
        ...state,
        dates: payload,
      };
    default:
      throw new Error();
  }
};
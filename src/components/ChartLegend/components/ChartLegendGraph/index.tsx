import React, { useContext } from "react";
import "./index.css";

import TimeLine from "./components/TimeLine";
import {
  BasicPoints,
  ChoroplethLine,
  GradientLine,
} from "./components/ChartGraphItem";


import { LegendActionsTypes } from "../../../../stores/legendStore/reducer";
import { LegendContext } from "../../../../stores/legendStore/context";

const ChartLegendGraph = () => {
  const { state, dispatch } = useContext(LegendContext)
  const { chartData, dates, collapse } = state;

  if (collapse) return null

  const handleChangeDates = (dates: number[]) => {
    dispatch({ type: LegendActionsTypes.setDates, payload: dates })
  }

  const ElementType = () => {
    switch (chartData?.type) {
      case "choropleth":
        return <ChoroplethLine items={chartData?.items} />;
      case "gradient":
        return <GradientLine items={chartData?.items} />;
      case "basic":
        return <BasicPoints items={chartData?.items} />;
      case "timeline":
        return <TimeLine
          dates={dates}
          handleChangeDates={handleChangeDates}
          timeline={chartData?.timeline}
        />;
      default:
        return null;
    }
  };

  const Label = () => {
    return (
      <div className="legend-graph_label">
        {chartData?.items?.map(({ name, color }) => (
          <div key={`${color}-${name}`} className="legend-graph_label_item">
            <span>{name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="legend-graph">
      <ElementType />
      {chartData?.type !== "basic" ? <Label /> : null}
    </div>
  );
};

export default ChartLegendGraph;

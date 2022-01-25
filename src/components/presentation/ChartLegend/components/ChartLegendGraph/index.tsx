import React from "react";
import "./index.css";
import {
  ChartDataItems,
  ChartDataTymeline,
  ChartType,
} from "../../../../../models/Charts/ChartsModel";
import TimeLine from "./components/TimeLine";
import {
  BasicPoints,
  ChoroplethLine,
  GradientLine,
} from "./components/ChartGraphItem";

interface ChartLegendGraphProps {
  items?: ChartDataItems[];
  type: ChartType;
  timeline?: ChartDataTymeline;
  dates?: number[];
  handleChangeDates: (dates: number[]) => void
}

const ChartLegendGraph = ({ items, type, timeline, dates, handleChangeDates }: ChartLegendGraphProps) => {
  const ElementType = () => {
    switch (type) {
      case "choropleth":
        return <ChoroplethLine items={items} />;
      case "gradient":
        return <GradientLine items={items} />;
      case "basic":
        return <BasicPoints items={items} />;
      case "timeline":
        return <TimeLine
          dates={dates}
          handleChangeDates={handleChangeDates}
          timeline={timeline}
        />;
      default:
        return null;
    }
  };

  const Label = () => {
    return (
      <div className="legend-graph_label">
        {items?.map(({ name, color }) => (
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
      {type !== "basic" ? <Label /> : null}
    </div>
  );
};

export default ChartLegendGraph;

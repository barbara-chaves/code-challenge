import React, { useContext } from "react";
import "./index.scss";

import TimeLine from "./components/TimeLine";
import {
  BasicPoints,
  ChoroplethLine,
  GradientLine,
} from "./components/ChartGraphItems";

import { LegendActionsTypes } from "../../../../../../stores/legendStore/reducer";
import { LegendContext } from "../../../../../../stores/legendStore/context";
import PageText from "../../../../../../components/PageText";

const hasLabelList: (string | undefined)[] = ["choropleth", "gradient"];

const hasTextList : (string | undefined)[] = ["gradient"];

const ChartLegendGraph = () => {
  const { state, dispatch } = useContext(LegendContext);
  const { chartData, dates, collapse } = state;

  if (collapse) return null;

  const handleChangeDates = (dates: number[]) => {
    dispatch({ type: LegendActionsTypes.setDates, payload: dates });
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

  const ElementType = () => {
    switch (chartData?.type) {
      case "choropleth":
        return <ChoroplethLine items={chartData?.items} />;
      case "gradient":
        return <GradientLine items={chartData?.items} />;
      case "basic":
        return <BasicPoints items={chartData?.items} />;
      case "timeline":
        return (
          <TimeLine
            dates={dates}
            handleChangeDates={handleChangeDates}
            timeline={chartData?.timeline}
          />
        );
      default:
        return null;
    }
  };

  const hasLabel = hasLabelList.includes(chartData?.type);
  const hasText = hasTextList.includes(chartData?.type);

  return (
    <div className="legend-graph">
      <ElementType />
      {hasLabel ? <Label /> : null}
      {hasText ? (
        <PageText textId={`charts.legends.${chartData?.type}`} />
      ) : null}
    </div>
  );
};

export default ChartLegendGraph;

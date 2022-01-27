import React, { useContext } from "react";
import "./index.css";


import { LegendActionsTypes } from "../../../../stores/legendStore/reducer";
import { LegendContext } from "../../../../stores/legendStore/context";
import InteractionalIcon from "../../../InteractionalIcon";

const ChartLegendHeader = () => {
  const { state, dispatch } = useContext(LegendContext)
  const { dragProps, chartData, visibility, collapse } = state;

  const onChangeVisibility = () => {
    dispatch({ type: LegendActionsTypes.setVisibility })
  }

  const onChangeInfo = () => {
    dispatch({ type: LegendActionsTypes.setShowInfo })
  }

  const onChangeCollapse = () => {
    dispatch({ type: LegendActionsTypes.setCollapse })
  }

  return (
    <div className="chart_legend_header">
      <div className="chart_legend_header_block">
        <InteractionalIcon
          key="grad"
          type="drag"
          handleClick={() => { }}
          dragProps={dragProps}
        />
        <h4 className="chart_legend_header_block_title">{chartData?.name}</h4>
      </div>
      <div className="chart_legend_header_block">
        <InteractionalIcon
          key="hide"
          type={visibility ? "show" : "hide"}
          handleClick={onChangeVisibility}
        />
        <InteractionalIcon
          key="info"
          type="info"
          handleClick={onChangeInfo}
        />
        <InteractionalIcon
          key="down"
          type={collapse ? "up" : "down"}
          handleClick={onChangeCollapse}
        />
      </div>
    </div>
  );
};

export default ChartLegendHeader;

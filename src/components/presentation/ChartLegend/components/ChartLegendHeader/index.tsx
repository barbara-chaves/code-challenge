import React from "react";
import "./index.css";
import InteractionalIcon from "../../../InteractionalIcon";

interface ChartLegendHeaderProps {
  name: string;
  visibility: boolean;
  handleChangeVisibility: () => void;
  collapse: boolean;
  handleChangeCollapse: () => void;
  handleChangeShowInfo: () => void;
}

const ChartLegendHeader = ({
  name,
  visibility,
  handleChangeVisibility,
  collapse,
  handleChangeCollapse,
  handleChangeShowInfo,
}: ChartLegendHeaderProps) => {
  return (
    <div className="chart_legend_header">
      <div className="chart_legend_header_block">
        <InteractionalIcon key="grad" type="drag" handleClick={() => {}} />
        <h4 className="chart_legend_header_block_title">{name}</h4>
      </div>
      <div className="chart_legend_header_block">
        <InteractionalIcon
          key="hide"
          type={visibility ? "show" : "hide"}
          handleClick={handleChangeVisibility}
        />
        <InteractionalIcon
          key="info"
          type="info"
          handleClick={handleChangeShowInfo}
        />
        <InteractionalIcon
          key="down"
          type={collapse ? "up" : "down"}
          handleClick={handleChangeCollapse}
        />
      </div>
    </div>
  );
};

export default ChartLegendHeader;

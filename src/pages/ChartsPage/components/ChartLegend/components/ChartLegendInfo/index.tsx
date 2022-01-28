import React, { useContext } from "react";
import "./index.scss";
import Modal from "react-modal";

import CloseButton from "../../../../../../components/CloseButton";
import { LegendActionsTypes } from "../../../../../../stores/legendStore/reducer";
import { LegendContext } from "../../../../../../stores/legendStore/context";
import HtmlText from "../../../../../../components/HtmlText";

Modal.setAppElement("#root");

const ChartLegendInfo = () => {
  const { state, dispatch } = useContext(LegendContext);
  const { chartData, showInfo } = state;

  const onChangeInfo = () => {
    dispatch({ type: LegendActionsTypes.setShowInfo });
  };

  if (!chartData?.description) return null;

  return (
    <Modal
      isOpen={showInfo}
      contentLabel="See details"
      style={{
        content: {
          width: "520px",
          margin: "auto",
          border: "none",
          boxShadow: "1px 1px 10px 1px #BBB",
        },
      }}
    >
      <div className="chart-legend-info">
        <div className="chart-legend-info_header">
          <h2>{chartData?.name}</h2>
          <CloseButton handleClick={onChangeInfo} />
        </div>
        {chartData?.description ? (
          <HtmlText htmlText={chartData.description} />
        ) : null}
      </div>
    </Modal>
  );
};

export default ChartLegendInfo;

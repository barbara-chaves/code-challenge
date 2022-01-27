import React, { useContext } from 'react';
import "./index.css"
import parse from 'html-react-parser';
import Modal from 'react-modal'

import CloseButton from '../../../../../../components/CloseButton';
import { LegendActionsTypes } from '../../../../../../stores/legendStore/reducer';
import { LegendContext } from '../../../../../../stores/legendStore/context';

Modal.setAppElement("#root")

const ChartLegendInfo = () => {
  const { state, dispatch } = useContext(LegendContext)
  const { chartData, showInfo } = state;

  const onChangeInfo = () => {
    dispatch({ type: LegendActionsTypes.setShowInfo })
  }
  
  if (!chartData?.description) return null

  const DescriptionReactElement = parse(chartData?.description)
  return (
    <Modal
      isOpen={showInfo}
      contentLabel="See details"
      style={{
        content: {
          width: "520px",
          margin: "auto",
          border: "none",
          boxShadow: "1px 1px 10px 1px #BBB"
        }
      }}
    >
      <div className='chart-legend-info'>
        <div className='chart-legend-info_header'>
          <h2>{chartData?.name}</h2>
          <CloseButton handleClick={onChangeInfo} />
        </div>
        <div className='chart-legend-info_text'>
          {DescriptionReactElement}
        </div>
      </div>
    </Modal>
  )
};

export default ChartLegendInfo;

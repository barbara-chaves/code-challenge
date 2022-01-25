import React, { useState } from 'react';
import "./index.css"

import ChartData from '../../../models/Charts/ChartsModel';
import ChartLegendHeader from './components/ChartLegendHeader';
import ChartLegendGraph from './components/ChartLegendGraph';
import ChartLegendInfo from './components/ChartLegendInfo';

interface ChartLegendProps {
  chartData: ChartData;
}

const ChartLegend = ({ chartData }: ChartLegendProps) => {
  const { name, description, type, items, timeline } = chartData;

  const [visibility, setVisibility] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [dates, setDates] = useState<number[]>([])

  const onChangeDate = (value: number[]) => {
    setDates(value)
  }

  const onChangeInfo = () => {
    // opens a modal that displays the content from the description
    setShowInfo(!showInfo)
  }

  const onChangeVisibility = () => {
    // changes the icon and the tooltip name
    setVisibility(!visibility)
  }

  const onChangeCollapse = () => {
    // collapses the legend item and shows only the title of the component. It also changes the tooltip name
    setCollapse(!collapse)
  }

  return (
    <div className='chart-legend'>
      <ChartLegendHeader
        name={name}
        visibility={visibility}
        handleChangeVisibility={onChangeVisibility}
        collapse={collapse}
        handleChangeCollapse={onChangeCollapse}
        handleChangeShowInfo={onChangeInfo}
      />
      {!collapse
        ? <ChartLegendGraph
          dates={dates}
          handleChangeDates={onChangeDate}
          type={type}
          items={items}
          timeline={timeline}
        />
        : null}
      {(showInfo && !collapse)
        ? <ChartLegendInfo description={description} />
        : null}
    </div>
  );
};

export default ChartLegend;

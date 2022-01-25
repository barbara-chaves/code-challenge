import React, { useEffect, useState } from 'react';
import ChartData from '../../../models/Charts/ChartsModel';
import chartService from '../../../services/chart/chartService';
import ChartLegend from '../ChartLegend';

const Chart = () => {
  const [chartDataList, setChartDataList] = useState<ChartData[]>()

  useEffect(() => {
    chartService.getChartsData().then(data => setChartDataList(data))
  }, [])

  return (
    <div>
      {
        chartDataList?.map((data) => <ChartLegend key={data.id} chartData={data} />)
      }
    </div>
  );
};

export default Chart;

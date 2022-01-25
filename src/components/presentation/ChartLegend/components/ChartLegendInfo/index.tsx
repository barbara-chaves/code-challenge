import React from 'react';

interface ChartLegendInfoProps {
  description?: string;
}

const ChartLegendInfo = ({ description }: ChartLegendInfoProps) => {
  return description ? <div dangerouslySetInnerHTML={{ __html: description }} /> : null;
};

export default ChartLegendInfo;

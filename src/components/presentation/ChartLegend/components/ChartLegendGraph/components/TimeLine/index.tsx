import React, { useState } from 'react';
import dayjs from "dayjs"
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./index.css"

import { ChartDataTymeline } from '../../../../../../../models/Charts/ChartsModel';

const handleStyle = { backgroundColor: "#CAB2D6", border: "none", width: 12, height: 12 }
const railStyle = { backgroundColor: "#CCCCCC", borderRadius: 0, height: 3 }
const trackSTyle = { backgroundColor: "#CAB2D6", height: 3 }

interface TimeLineProps {
  timeline?: ChartDataTymeline;
  dates?: number[];
  handleChangeDates: (a: any) => void
}

const TimeLine = ({ timeline }: TimeLineProps) => {
  const [date, setDate] = useState<number[]>([])

  const onChangeDate = (value: number[]) => {
    setDate(value)
  }

  const formatDate = (dateStr: string, dateFormat: string) => {
    return dayjs(dateStr).format(dateFormat)
  }

  if (timeline) {
    const { dateFormat, maxDate, minDate, step } = timeline;
    const min = formatDate(minDate, dateFormat);
    const max = formatDate(maxDate, dateFormat)
    const maxNumber = Number(max);
    const minNumber = Number(min);
   
    return (
      <div className='timeline'>
        {
          (typeof maxNumber === "number" && typeof minNumber === "number") ? (
            <Range
              defaultValue={[minNumber, maxNumber]}
              value={date.length ? date : [minNumber, maxNumber]}
              step={step}
              max={maxNumber}
              min={minNumber}
              onChange={onChangeDate}
              allowCross={false}
              railStyle={railStyle}
              trackStyle={[trackSTyle]}
              handleStyle={[handleStyle, handleStyle]}
            />
          ) : null
        }
        <div className='timeline_label'>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }
  return null
}

export default TimeLine;

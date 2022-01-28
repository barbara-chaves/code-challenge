import React, { useContext, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import chartService from '../../../../services/chart/chartService';
import { ChartDataContext } from '../../../../stores/chartDataStore/context';
import { ChartActionTypes } from '../../../../stores/chartDataStore/reducer';

import { LegendProvider } from '../../../../stores/legendStore/context';

import ChartLegend from '../ChartLegend';

const Chart = () => {
  const { state, dispatch } = useContext(ChartDataContext)
  const chartData = state?.chartData;

  useEffect(() => {
    chartService.getChartsData()
      .then((data) => {
        dispatch({ type: ChartActionTypes.GET_DATA, payload: data })
      })
  }, [])

  const onChangeOrder = ({ source, destination }: any) => {
    if (destination && chartData) {
      const oldIndex = source.index;
      const newIndex = destination.index;
      const newList = chartData.filter((v, index) => index !== oldIndex)
      const newOrderedList =
        [...newList.slice(0, newIndex),
        chartData[oldIndex],
        ...newList.slice(newIndex, newList.length + 1)]

      dispatch({ type: ChartActionTypes.CHANGE_DATA_POSITION, payload: newOrderedList })
    }
  }

  return (
    <div className=''>
      <DragDropContext
        onDragEnd={onChangeOrder}
      >
        <Droppable droppableId="legends-list">
          {(provided) => (
            <ul
              className='legends-list'
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none" }}
            >
              {
                chartData?.map((data, index) => (
                  <Draggable
                    key={data.id}
                    draggableId={data.id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <LegendProvider
                          dragProps={provided.dragHandleProps}
                          chartData={data}
                        >
                          <ChartLegend />
                        </LegendProvider>
                      </li>
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Chart;


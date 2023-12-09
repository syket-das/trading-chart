'use client';
import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import 'ag-charts-enterprise';
const Chart2 = () => {
  const [options, setOptions] = useState({
    data: [
      {
        date: '1',
        start: 0,
        gain: 210,
        loss: 200,
      },
      {
        date: '2',
        start: 200,
        gain: 440,
        loss: 305,
      },
      {
        date: '3',
        start: 305,
        gain: 589,
        loss: 488,
      },
      {
        date: '4',
        start: 488,
        gain: 809,
        loss: 721,
      },
      {
        date: '5',
        start: 721,
        gain: 1002,
        loss: 833,
      },
      {
        date: '6',
        start: 833,
        gain: 1035,
        loss: 852,
      },
      {
        date: '7',
        start: 852,
        gain: 1050,
        loss: 852,
      },
      {
        date: '8',
        start: 852,
        gain: 1059,
        loss: 924,
      },
      {
        date: '9',
        start: 924,
        gain: 1205,
        loss: 1115,
      },
      {
        date: '10',
        start: 1115,
        gain: 1390,
        loss: 1231,
      },
      {
        date: '11',
        start: 1231,
        gain: 1425,
        loss: 1306,
      },
      {
        date: '12',
        start: 1306,
        gain: 1498,
        loss: 1484,
      },
    ],
    title: {
      text: 'Ranges ',
    },
    subtitle: {
      text: 'Low and High ',
    },
    series: [
      {
        type: 'range-bar',
        xKey: 'date',
        yLowKey: 'start',
        yHighKey: 'gain',
        xName: 'Month',
        yLowName: 'Start',
        yHighName: 'End',
        yName: 'Gained',
      },
      {
        type: 'range-bar',
        xKey: 'date',
        yLowKey: 'loss',
        yHighKey: 'gain',
        xName: 'Month',
        yLowName: 'End',
        yHighName: 'Start',
        yName: 'Lost',
      },
    ],
  });

  return (
    <div>
      <AgChartsReact options={options} />
    </div>
  );
};

export default Chart2;

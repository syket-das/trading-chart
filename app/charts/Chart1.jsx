'use client';
import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import 'ag-charts-enterprise';
const Chart1 = () => {
  const [options, setOptions] = useState({
    data: [
      {
        financials: '1',
        amount: 185,
      },
      {
        financials: '2',
        amount: -545,
      },
      {
        financials: '3',
        amount: 134,
      },

      {
        financials: '4',
        amount: -252,
      },
      {
        financials: '5',
        amount: 155,
      },
      {
        financials: '6',
        amount: -112,
      },
    ],
    title: {
      text: 'Chart Title',
    },
    subtitle: {
      text: 'All fake data ',
    },
    series: [
      {
        type: 'waterfall',
        xKey: 'financials',
        xName: '',
        yKey: 'amount',
        yName: 'Amount',
        line: {
          // make the line curve
        },
      },
    ],
  });
  return (
    <div>
      <AgChartsReact options={options} />
    </div>
  );
};

export default Chart1;

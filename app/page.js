'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import 'ag-charts-enterprise';

export default function Home() {
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
      },
    ],
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <AgChartsReact options={options} />
    </main>
  );
}

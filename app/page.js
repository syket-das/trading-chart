'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import 'ag-charts-enterprise';

export default function Home() {
  const [options, setOptions] = useState({
    data: [
      {
        financials: 'Income\nTax',
        amount: 185,
      },
      {
        financials: 'VAT',
        amount: -545,
      },
      {
        financials: 'NI',
        amount: 134,
      },

      {
        financials: 'Social\nProtection',
        amount: -252,
      },
      {
        financials: 'Health',
        amount: 155,
      },
      {
        financials: 'Education',
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
        xName: 'Financials',
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

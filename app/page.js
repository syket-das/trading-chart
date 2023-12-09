'use client';
import Chart1 from './charts/Chart1';
import Chart2 from './charts/Chart2';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24 ">
      <Chart1 />
      <Chart2 />
    </main>
  );
}

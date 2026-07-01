'use client';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { chartData } from '../data';

const chartMargin = { top: 5, right: 10, left: 10, bottom: 0 };
const axisTick = { fill: '#71717a', fontSize: 10 };
const tooltipContentStyle = {
  backgroundColor: '#18181b',
  border: '1px solid #27272a',
  borderRadius: '8px',
  color: '#f4f4f5',
};
const tooltipItemStyle = { color: '#f4f4f5' };
const legendWrapperStyle = { paddingTop: '20px', fontSize: '12px' };
const revenueActiveDot = { r: 4, fill: '#34d399', strokeWidth: 0 };
const profitActiveDot = { r: 4, fill: '#818cf8', strokeWidth: 0 };

export function RevenueChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 w-full h-full min-h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold text-zinc-100">Performance Overview (7 Days)</h3>
      </div>
      <div className="w-full flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={chartMargin}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#71717a"
              tick={axisTick}
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis
              stroke="#71717a"
              tick={axisTick}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `₽${value / 1000}k`}
              dx={-10}
            />
            <Tooltip
              contentStyle={tooltipContentStyle}
              itemStyle={tooltipItemStyle}
            />
            <Legend
              wrapperStyle={legendWrapperStyle}
              iconType="circle"
            />
            <Line
              type="monotone"
              name="Выручка"
              dataKey="revenue"
              stroke="#34d399"
              strokeWidth={2}
              dot={false}
              activeDot={revenueActiveDot}
            />
            <Line
              type="monotone"
              name="Прибыль"
              dataKey="profit"
              stroke="#818cf8"
              strokeWidth={2}
              dot={false}
              activeDot={profitActiveDot}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

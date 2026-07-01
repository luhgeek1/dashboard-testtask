import { DollarSign, Percent, Receipt, Activity, TrendingUp, TrendingDown } from 'lucide-react';
import type { StatMetric } from '../types';

const icons = {
  dollar: DollarSign,
  percent: Percent,
  receipt: Receipt,
  activity: Activity,
};

type StatCardProps = {
  metric: StatMetric;
};

export function StatCard({ metric }: StatCardProps) {
  const Icon = icons[metric.iconName];
  const isPositive = metric.trend >= 0;

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-lg flex flex-col justify-between relative overflow-hidden h-full">
      <div className="flex justify-between items-start mb-2">
        <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest">{metric.title}</span>
        <Icon className="w-4 h-4 text-zinc-600" />
      </div>
      <div className="mt-2">
        <span className="text-3xl font-light text-zinc-100">{metric.value}</span>
        <span className={`flex items-center gap-1 text-xs mt-2 ${
          isPositive ? 'text-emerald-400' : 'text-red-400'
        }`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {isPositive ? '+' : '-'}{Math.abs(metric.trend)}% vs last week
        </span>
      </div>
    </div>
  );
}

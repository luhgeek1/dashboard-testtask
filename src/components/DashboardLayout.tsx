import { StatCard } from './StatCard';
import { RevenueChart } from './RevenueChart';
import { AIRecommendations } from './AIRecommendations';
import { statMetrics } from '../data';
import { Settings, Bell } from 'lucide-react';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 flex flex-col">
      <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-4 md:px-8 bg-zinc-900/50 shrink-0">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 text-sm">
          <div className="flex items-center gap-3">
            <button type="button" className="text-zinc-400 hover:text-zinc-100 transition-colors" aria-label="Notifications" title="Notifications">
              <Bell className="w-5 h-5" />
            </button>
            <button type="button" className="text-zinc-400 hover:text-zinc-100 transition-colors" aria-label="Settings" title="Settings">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center font-medium text-xs ml-2">
              ИС
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 max-w-350 w-full mx-auto flex flex-col gap-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statMetrics.map(metric => (
            <StatCard key={metric.id} metric={metric} />
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          <div className="lg:col-span-8 h-full">
            <RevenueChart />
          </div>
          <div className="lg:col-span-4 h-full">
            <AIRecommendations />
          </div>
        </section>
      </main>
    </div>
  );
}

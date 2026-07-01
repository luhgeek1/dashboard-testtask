import { aiRecommendations } from '../data';
import { ArrowRight } from 'lucide-react';

const borderColors = ['border-violet-500', 'border-indigo-500', 'border-emerald-500'];

export function AIRecommendations() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
        <h3 className="text-sm font-semibold text-zinc-100">AI Рекомендации</h3>
      </div>

      <div className="space-y-4 flex-1">
        {aiRecommendations.map((rec, idx) => (
          <div key={rec.id} className={`p-4 bg-zinc-800/40 rounded-md border-l-2 ${borderColors[idx % borderColors.length]} flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-medium text-zinc-200">{rec.title}</p>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                {rec.description}
              </p>
            </div>
            <button type="button" className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-300 hover:text-zinc-100 transition-colors mt-3">
              {rec.actionLabel}
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

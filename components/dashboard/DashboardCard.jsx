import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function DashboardCard({ title, value, subtitle, icon: Icon, trend, trendValue, color = 'blue' }) {
  const colorMap = {
    blue:    'from-blue-500 to-blue-600',
    green:   'from-emerald-500 to-emerald-600',
    orange:  'from-orange-400 to-orange-500',
    purple:  'from-purple-500 to-purple-600',
    red:     'from-red-500 to-red-600',
    cyan:    'from-cyan-500 to-cyan-600',
    indigo:  'from-indigo-500 to-indigo-600',
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const trendColor = trend === 'up' ? 'text-emerald-500' : trend === 'down' ? 'text-red-500' : 'text-slate-400';

  return (
    <div className="card-hover flex items-start gap-4 animate-fade-in group">
      {/* icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center shadow-lg shadow-${color}-500/25 group-hover:scale-105 transition-transform duration-300`}>
        {Icon && <Icon size={22} className="text-white" />}
      </div>
      {/* info */}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">{title}</p>
        <p className="text-2xl font-bold text-slate-800 animate-count-up">{value}</p>
        <div className="flex items-center gap-1.5 mt-1">
          {trendValue && (
            <>
              <TrendIcon size={14} className={trendColor} />
              <span className={`text-xs font-medium ${trendColor}`}>{trendValue}</span>
            </>
          )}
          {subtitle && <span className="text-xs text-slate-400">{subtitle}</span>}
        </div>
      </div>
    </div>
  );
}

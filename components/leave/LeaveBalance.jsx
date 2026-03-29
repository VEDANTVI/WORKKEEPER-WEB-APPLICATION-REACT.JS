const balances = [
  { type: 'Casual Leave',   total: 12, used: 3, remaining: 9, color: 'bg-blue-500' },
  { type: 'Sick Leave',     total: 10, used: 4, remaining: 6, color: 'bg-emerald-500' },
  { type: 'Personal Leave', total: 6,  used: 1, remaining: 5, color: 'bg-purple-500' },
  { type: 'Vacation',       total: 15, used: 6, remaining: 9, color: 'bg-orange-500' },
];

export default function LeaveBalance() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Leave Balance</h3>
      <div className="space-y-4">
        {balances.map((b) => (
          <div key={b.type}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-slate-600">{b.type}</span>
              <span className="text-xs text-slate-400">{b.used}/{b.total} used</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${b.color} transition-all duration-500`}
                style={{ width: `${(b.used / b.total) * 100}%` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{b.remaining} days remaining</p>
          </div>
        ))}
      </div>
    </div>
  );
}

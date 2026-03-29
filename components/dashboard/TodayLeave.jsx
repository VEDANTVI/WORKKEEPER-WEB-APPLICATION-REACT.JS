const leaves = [
  { name: 'Arjun Nair',     type: 'Sick Leave',     date: 'Today' },
  { name: 'Kavita Menon',   type: 'Casual Leave',   date: 'Today' },
  { name: 'Nikhil Rao',     type: 'Personal Leave', date: 'Today' },
];

export default function TodayLeave() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">On Leave Today</h3>
      {leaves.length === 0 ? (
        <p className="text-sm text-slate-400">No one is on leave today 🎉</p>
      ) : (
        <div className="space-y-3">
          {leaves.map((l, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-0 border-slate-100">
              <div>
                <p className="text-sm font-medium text-slate-700">{l.name}</p>
                <p className="text-xs text-slate-400">{l.type}</p>
              </div>
              <span className="text-xs text-orange-500 font-medium bg-orange-50 px-2 py-0.5 rounded-full">{l.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const upcoming = [
  { name: 'Sonal Verma',  type: 'Vacation',     from: '18 Mar', to: '22 Mar' },
  { name: 'Rahul Singh',  type: 'Personal',     from: '20 Mar', to: '20 Mar' },
  { name: 'Deepa Joshi',  type: 'Sick Leave',   from: '25 Mar', to: '26 Mar' },
];

export default function UpcomingLeave() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Upcoming Leaves</h3>
      <div className="space-y-3">
        {upcoming.map((l, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b last:border-0 border-slate-100">
            <div>
              <p className="text-sm font-medium text-slate-700">{l.name}</p>
              <p className="text-xs text-slate-400">{l.type}</p>
            </div>
            <span className="text-xs text-blue-500 font-medium">{l.from} – {l.to}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

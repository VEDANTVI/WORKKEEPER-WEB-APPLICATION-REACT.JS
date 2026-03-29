const history = [
  { id: 1, type: 'Sick Leave',     from: '05 Mar', to: '06 Mar', days: 2, status: 'approved' },
  { id: 2, type: 'Casual Leave',   from: '20 Feb', to: '20 Feb', days: 1, status: 'approved' },
  { id: 3, type: 'Personal Leave', from: '10 Jan', to: '10 Jan', days: 1, status: 'rejected' },
  { id: 4, type: 'Vacation',       from: '25 Dec', to: '01 Jan', days: 6, status: 'approved' },
];

export default function LeaveHistory() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">My Leave History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Type</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Duration</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Days</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {history.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50/50">
                <td className="px-5 py-3 font-medium text-slate-700">{r.type}</td>
                <td className="px-5 py-3 text-slate-600">{r.from} – {r.to}</td>
                <td className="px-5 py-3 text-slate-600">{r.days}</td>
                <td className="px-5 py-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    r.status === 'approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                  }`}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

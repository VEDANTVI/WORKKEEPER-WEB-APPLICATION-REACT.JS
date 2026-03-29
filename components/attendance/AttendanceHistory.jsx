const history = [
  { date: '12 Mar 2026', inTime: '09:10 AM', outTime: '06:05 PM', hours: '8h 55m', status: 'present' },
  { date: '11 Mar 2026', inTime: '09:00 AM', outTime: '06:00 PM', hours: '9h 00m', status: 'present' },
  { date: '10 Mar 2026', inTime: '09:40 AM', outTime: '06:30 PM', hours: '8h 50m', status: 'late' },
  { date: '09 Mar 2026', inTime: '--',       outTime: '--',       hours: '--',      status: 'leave' },
  { date: '08 Mar 2026', inTime: '09:05 AM', outTime: '05:15 PM', hours: '8h 10m', status: 'present' },
];

export default function AttendanceHistory() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-700">Attendance History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Date</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase">In</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Out</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Hours</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {history.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="px-5 py-3 text-slate-700 font-medium">{r.date}</td>
                <td className="px-5 py-3 text-slate-600">{r.inTime}</td>
                <td className="px-5 py-3 text-slate-600">{r.outTime}</td>
                <td className="px-5 py-3 text-slate-600">{r.hours}</td>
                <td className="px-5 py-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    r.status === 'present' ? 'bg-emerald-50 text-emerald-600' :
                    r.status === 'late'    ? 'bg-amber-50 text-amber-600' :
                                             'bg-indigo-50 text-indigo-600'
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

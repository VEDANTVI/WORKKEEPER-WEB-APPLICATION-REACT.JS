import { STATUS_COLORS } from '../../utils/constants';

const mockData = [
  { id: 1, name: 'Amit Patel',    date: '13 Mar 2026', inTime: '09:05 AM', outTime: '06:10 PM', status: 'present', hours: '9h 05m' },
  { id: 2, name: 'Sonal Verma',   date: '13 Mar 2026', inTime: '09:45 AM', outTime: '06:30 PM', status: 'late',    hours: '8h 45m' },
  { id: 3, name: 'Rahul Singh',   date: '13 Mar 2026', inTime: '08:55 AM', outTime: '05:50 PM', status: 'present', hours: '8h 55m' },
  { id: 4, name: 'Arjun Nair',    date: '13 Mar 2026', inTime: '--',       outTime: '--',       status: 'leave',   hours: '--' },
  { id: 5, name: 'Meena Gupta',   date: '13 Mar 2026', inTime: '09:30 AM', outTime: '06:00 PM', status: 'wfh',     hours: '8h 30m' },
  { id: 6, name: 'Deepa Joshi',   date: '13 Mar 2026', inTime: '09:00 AM', outTime: '06:15 PM', status: 'present', hours: '9h 15m' },
  { id: 7, name: 'Kavita Menon',  date: '13 Mar 2026', inTime: '--',       outTime: '--',       status: 'absent',  hours: '--' },
];

export default function AttendanceTable({ data = mockData, compact = false }) {
  return (
    <div className="table-wrapper">
      {!compact && (
        <div className="table-header">
          <h3>Attendance Overview</h3>
          <span>Today</span>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Employee</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">In Time</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Out Time</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Hours</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => {
              const sc = STATUS_COLORS[row.status] || {};
              return (
                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-700">{row.name}</td>
                  <td className="px-5 py-3 text-slate-500">{row.date}</td>
                  <td className="px-5 py-3 text-slate-600">{row.inTime}</td>
                  <td className="px-5 py-3 text-slate-600">{row.outTime}</td>
                  <td className="px-5 py-3 text-slate-600">{row.hours}</td>
                  <td className="px-5 py-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize"
                      style={{ background: sc.bg, color: sc.text }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { day: 'Mon', present: 42, absent: 3, late: 5, wfh: 8 },
  { day: 'Tue', present: 44, absent: 2, late: 3, wfh: 9 },
  { day: 'Wed', present: 40, absent: 5, late: 4, wfh: 9 },
  { day: 'Thu', present: 43, absent: 3, late: 2, wfh: 10 },
  { day: 'Fri', present: 38, absent: 4, late: 6, wfh: 10 },
];

export default function AttendanceReport() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Weekly Attendance Report</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#64748b' }} />
          <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
          <Tooltip
            contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Bar dataKey="present" fill="#10b981" radius={[4, 4, 0, 0]} name="Present" />
          <Bar dataKey="absent"  fill="#ef4444" radius={[4, 4, 0, 0]} name="Absent" />
          <Bar dataKey="late"    fill="#f59e0b" radius={[4, 4, 0, 0]} name="Late" />
          <Bar dataKey="wfh"     fill="#06b6d4" radius={[4, 4, 0, 0]} name="WFH" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

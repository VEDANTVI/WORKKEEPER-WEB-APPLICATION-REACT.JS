import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { week: 'W1',  avgHours: 8.2, targetHours: 8.5 },
  { week: 'W2',  avgHours: 8.5, targetHours: 8.5 },
  { week: 'W3',  avgHours: 7.8, targetHours: 8.5 },
  { week: 'W4',  avgHours: 8.7, targetHours: 8.5 },
  { week: 'W5',  avgHours: 8.1, targetHours: 8.5 },
  { week: 'W6',  avgHours: 8.9, targetHours: 8.5 },
];

export default function WorkHoursReport() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Avg Work Hours (Weekly)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#64748b' }} />
          <YAxis tick={{ fontSize: 12, fill: '#64748b' }} domain={[6, 10]} />
          <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Line type="monotone" dataKey="avgHours"    stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4 }} name="Avg Hours" />
          <Line type="monotone" dataKey="targetHours" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5 5" dot={false} name="Target" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

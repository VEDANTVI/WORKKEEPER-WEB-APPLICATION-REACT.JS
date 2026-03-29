import { FileText, Filter } from 'lucide-react';
import Button from '../../components/common/Button';

const logs = [
  { time: '21:30', user: 'Rajesh Kumar', action: 'Updated employee record', target: 'Amit Patel',    type: 'update' },
  { time: '20:15', user: 'Priya Sharma', action: 'Approved leave request',  target: 'Sonal Verma',   type: 'approval' },
  { time: '18:45', user: 'Rajesh Kumar', action: 'Created new shift',       target: 'Night Shift',   type: 'create' },
  { time: '16:20', user: 'Priya Sharma', action: 'Rejected leave request',  target: 'Arjun Nair',    type: 'rejection' },
  { time: '14:10', user: 'Rajesh Kumar', action: 'Modified role permissions', target: 'Team Lead',    type: 'update' },
  { time: '11:30', user: 'Rajesh Kumar', action: 'Exported attendance report', target: 'March 2026', type: 'export' },
  { time: '09:00', user: 'System',       action: 'Auto-generated payroll',   target: 'All employees', type: 'system' },
];

const typeColors = {
  update:   'bg-blue-50 text-blue-600',
  approval: 'bg-emerald-50 text-emerald-600',
  create:   'bg-purple-50 text-purple-600',
  rejection:'bg-red-50 text-red-600',
  export:   'bg-amber-50 text-amber-600',
  system:   'bg-slate-100 text-slate-500',
};

export default function AuditLogs() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Audit Logs</h2>
          <p className="text-sm text-slate-500 mt-1">Track all system activities</p>
        </div>
        <Button variant="ghost" size="sm"><Filter size={14} /> Filter</Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Time</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">User</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Action</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Target</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map((l, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3 text-slate-500 font-mono text-xs">{l.time}</td>
                  <td className="px-5 py-3 font-medium text-slate-700">{l.user}</td>
                  <td className="px-5 py-3 text-slate-600">{l.action}</td>
                  <td className="px-5 py-3 text-slate-500">{l.target}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${typeColors[l.type]}`}>{l.type}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

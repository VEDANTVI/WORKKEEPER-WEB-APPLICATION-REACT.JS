import Button from '../../components/common/Button';
import { Home, Check, X } from 'lucide-react';

const requests = [
  { id: 1, name: 'Meena Gupta',  date: '13 Mar 2026', reason: 'Internet setup at home',   status: 'pending' },
  { id: 2, name: 'Deepa Joshi',  date: '14 Mar 2026', reason: 'Expecting courier delivery', status: 'pending' },
  { id: 3, name: 'Rahul Singh',  date: '12 Mar 2026', reason: 'Child is unwell',           status: 'approved' },
  { id: 4, name: 'Sonal Verma',  date: '11 Mar 2026', reason: 'Home repairs scheduled',    status: 'approved' },
];

export default function WFHRequests() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Work From Home Requests</h2>
          <p className="text-sm text-slate-500 mt-1">Manage WFH requests from employees</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Employee</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Date</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Reason</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3 flex items-center gap-2">
                    <Home size={14} className="text-cyan-500" />
                    <span className="font-medium text-slate-700">{r.name}</span>
                  </td>
                  <td className="px-5 py-3 text-slate-500">{r.date}</td>
                  <td className="px-5 py-3 text-slate-600">{r.reason}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                      r.status === 'approved' ? 'bg-emerald-50 text-emerald-600' :
                      r.status === 'pending'  ? 'bg-amber-50 text-amber-600' :
                                                'bg-red-50 text-red-600'
                    }`}>{r.status}</span>
                  </td>
                  <td className="px-5 py-3">
                    {r.status === 'pending' ? (
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 transition-colors"><Check size={14} className="text-emerald-600" /></button>
                        <button className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"><X size={14} className="text-red-600" /></button>
                      </div>
                    ) : <span className="text-xs text-slate-400">—</span>}
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

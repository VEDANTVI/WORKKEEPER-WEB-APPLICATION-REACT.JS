import { STATUS_COLORS } from '../../utils/constants';

const mockLeaves = [
  { id: 1, name: 'Amit Patel',   type: 'Sick Leave',     from: '10 Mar', to: '11 Mar', days: 2, status: 'approved', reason: 'Fever' },
  { id: 2, name: 'Sonal Verma',  type: 'Casual Leave',   from: '18 Mar', to: '22 Mar', days: 5, status: 'pending',  reason: 'Family function' },
  { id: 3, name: 'Rahul Singh',  type: 'Personal Leave', from: '20 Mar', to: '20 Mar', days: 1, status: 'pending',  reason: 'Bank work' },
  { id: 4, name: 'Arjun Nair',   type: 'Vacation',       from: '25 Mar', to: '28 Mar', days: 4, status: 'rejected', reason: 'Family trip' },
  { id: 5, name: 'Meena Gupta',  type: 'Sick Leave',     from: '13 Mar', to: '13 Mar', days: 1, status: 'approved', reason: 'Migraine' },
];

export default function LeaveTable({ data = mockLeaves, showActions = false, onApprove, onReject }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Leave Requests</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Employee</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Type</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Duration</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Days</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Reason</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
              {showActions && <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => {
              const sc = STATUS_COLORS[row.status] || {};
              return (
                <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-slate-700">{row.name}</td>
                  <td className="px-5 py-3 text-slate-500">{row.type}</td>
                  <td className="px-5 py-3 text-slate-600">{row.from} – {row.to}</td>
                  <td className="px-5 py-3 text-slate-600">{row.days}</td>
                  <td className="px-5 py-3 text-slate-500 max-w-[200px] truncate">{row.reason}</td>
                  <td className="px-5 py-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize"
                      style={{ background: sc.bg, color: sc.text }}
                    >
                      {row.status}
                    </span>
                  </td>
                  {showActions && row.status === 'pending' && (
                    <td className="px-5 py-3 flex gap-2">
                      <button
                        onClick={() => onApprove?.(row.id)}
                        className="px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => onReject?.(row.id)}
                        className="px-3 py-1 text-xs font-medium bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        Reject
                      </button>
                    </td>
                  )}
                  {showActions && row.status !== 'pending' && (
                    <td className="px-5 py-3 text-xs text-slate-400">—</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import Button from '../../components/common/Button';
import { Plus, Clock, Edit, Trash2 } from 'lucide-react';

const shifts = [
  { id: 1, name: 'Morning Shift',  start: '06:00 AM', end: '02:00 PM', employees: 12, color: 'bg-amber-50 text-amber-600' },
  { id: 2, name: 'General Shift',  start: '09:00 AM', end: '06:00 PM', employees: 35, color: 'bg-blue-50 text-blue-600' },
  { id: 3, name: 'Afternoon Shift', start: '02:00 PM', end: '10:00 PM', employees: 8,  color: 'bg-purple-50 text-purple-600' },
  { id: 4, name: 'Night Shift',    start: '10:00 PM', end: '06:00 AM', employees: 5,  color: 'bg-indigo-50 text-indigo-600' },
];

export default function ShiftManagement() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Shift Management</h2>
          <p className="text-sm text-slate-500 mt-1">Configure and manage work shifts</p>
        </div>
        <Button size="sm"><Plus size={14} /> Add Shift</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shifts.map((s) => (
          <div key={s.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}>
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-700">{s.name}</h4>
                  <p className="text-xs text-slate-400">{s.start} – {s.end}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"><Edit size={14} className="text-slate-400" /></button>
                <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"><Trash2 size={14} className="text-slate-400 hover:text-red-500" /></button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{s.employees} employees assigned</span>
              <div className="flex -space-x-2">
                {[...Array(Math.min(4, s.employees))].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white text-[8px] text-white flex items-center justify-center font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                {s.employees > 4 && <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white text-[8px] text-slate-500 flex items-center justify-center font-bold">+{s.employees - 4}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

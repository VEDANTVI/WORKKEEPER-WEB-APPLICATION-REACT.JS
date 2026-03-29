import { useState } from 'react';
import Button from '../../components/common/Button';
import { Plus, Calendar, Clock } from 'lucide-react';

const mockLogs = [
  { id: 1, date: '13 Mar', project: 'WorkKeeper', task: 'Dashboard UI components', hours: 4.5 },
  { id: 2, date: '13 Mar', project: 'WorkKeeper', task: 'API integration for attendance', hours: 3.0 },
  { id: 3, date: '12 Mar', project: 'WorkKeeper', task: 'Leave form validation', hours: 5.0 },
  { id: 4, date: '12 Mar', project: 'Internal',   task: 'Team standup & planning', hours: 1.0 },
  { id: 5, date: '11 Mar', project: 'WorkKeeper', task: 'Bug fixes for sidebar nav', hours: 6.0 },
];

export default function WorkLog() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Work Log</h2>
          <p className="text-sm text-slate-500 mt-1">Track your daily work activities</p>
        </div>
        <Button size="sm"><Plus size={14} /> Add Entry</Button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
            <Clock size={18} className="text-blue-500" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">7.5h</p>
            <p className="text-xs text-slate-400">Today</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <Clock size={18} className="text-emerald-500" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">38.5h</p>
            <p className="text-xs text-slate-400">This Week</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
            <Calendar size={18} className="text-purple-500" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">162h</p>
            <p className="text-xs text-slate-400">This Month</p>
          </div>
        </div>
      </div>

      {/* Log table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Date</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Project</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Task</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockLogs.map((l) => (
                <tr key={l.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3 text-slate-500">{l.date}</td>
                  <td className="px-5 py-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">{l.project}</span>
                  </td>
                  <td className="px-5 py-3 font-medium text-slate-700">{l.task}</td>
                  <td className="px-5 py-3 text-slate-600 font-mono">{l.hours}h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

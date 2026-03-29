import { useState } from 'react';
import Button from '../common/Button';
import { LogIn, LogOut } from 'lucide-react';

export default function AttendanceForm() {
  const [checkedIn, setCheckedIn] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Mark Attendance</h3>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 w-full">
          <label className="block text-xs font-medium text-slate-500 mb-1">Date</label>
          <input
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-xs font-medium text-slate-500 mb-1">Notes</label>
          <input
            type="text"
            placeholder="Optional notes..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400"
          />
        </div>
        <div className="pt-5">
          {!checkedIn ? (
            <Button variant="primary" onClick={() => setCheckedIn(true)}>
              <LogIn size={16} /> Check In
            </Button>
          ) : (
            <Button variant="danger" onClick={() => setCheckedIn(false)}>
              <LogOut size={16} /> Check Out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

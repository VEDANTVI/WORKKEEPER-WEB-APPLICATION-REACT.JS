import { Clock, LogIn, LogOut } from 'lucide-react';

export default function PresenceWidget({ inTime = '09:12 AM', outTime = '--:--', hours = '8h 15m' }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Today's Presence</h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-50 flex items-center justify-center">
            <LogIn size={18} className="text-emerald-500" />
          </div>
          <p className="text-lg font-bold text-slate-800">{inTime}</p>
          <p className="text-[11px] text-slate-400 uppercase">In Time</p>
        </div>
        <div className="space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-red-50 flex items-center justify-center">
            <LogOut size={18} className="text-red-500" />
          </div>
          <p className="text-lg font-bold text-slate-800">{outTime}</p>
          <p className="text-[11px] text-slate-400 uppercase">Out Time</p>
        </div>
        <div className="space-y-1">
          <div className="w-10 h-10 mx-auto rounded-xl bg-blue-50 flex items-center justify-center">
            <Clock size={18} className="text-blue-500" />
          </div>
          <p className="text-lg font-bold text-slate-800">{hours}</p>
          <p className="text-[11px] text-slate-400 uppercase">Working Hrs</p>
        </div>
      </div>
    </div>
  );
}

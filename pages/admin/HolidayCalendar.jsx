import { CalendarDays } from 'lucide-react';

const holidays = [
  { date: '26 Jan', day: 'Monday',    name: 'Republic Day',        type: 'National' },
  { date: '14 Mar', day: 'Friday',    name: 'Holi',                type: 'National' },
  { date: '18 Apr', day: 'Friday',    name: 'Good Friday',         type: 'National' },
  { date: '01 May', day: 'Thursday',  name: 'May Day',             type: 'National' },
  { date: '15 Aug', day: 'Friday',    name: 'Independence Day',    type: 'National' },
  { date: '02 Oct', day: 'Thursday',  name: 'Gandhi Jayanti',      type: 'National' },
  { date: '20 Oct', day: 'Monday',    name: 'Diwali',              type: 'Festival' },
  { date: '25 Dec', day: 'Thursday',  name: 'Christmas',           type: 'Festival' },
];

export default function HolidayCalendar() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Holiday Calendar</h2>
        <p className="text-sm text-slate-500 mt-1">Company holidays for the year 2026</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Date</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Day</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Holiday</th>
                <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {holidays.map((h, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-blue-500" />
                      <span className="font-medium text-slate-700">{h.date}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-slate-500">{h.day}</td>
                  <td className="px-5 py-3 font-medium text-slate-700">{h.name}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      h.type === 'National' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                    }`}>{h.type}</span>
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

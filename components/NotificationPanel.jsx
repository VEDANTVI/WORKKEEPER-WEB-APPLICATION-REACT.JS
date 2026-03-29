import { Bell, CheckCircle, Info, AlertTriangle, Calendar } from 'lucide-react';

const notifications = [
  { id: 1, icon: Calendar,       title: 'Leave Approved',          desc: 'Your sick leave for 10-11 Mar has been approved.',     time: '2h ago',  read: false },
  { id: 2, icon: Bell,           title: 'New Company Policy',      desc: 'Updated remote work policy has been published.',        time: '5h ago',  read: false },
  { id: 3, icon: CheckCircle,    title: 'Attendance Marked',       desc: 'Your attendance for today has been recorded.',          time: '8h ago',  read: true },
  { id: 4, icon: Info,           title: 'Holiday Notification',    desc: 'Office will be closed on 26 Mar for Holi.',            time: '1d ago',  read: true },
  { id: 5, icon: AlertTriangle,  title: 'Pending Timesheet',       desc: 'Please submit your timesheet for last week.',          time: '2d ago',  read: true },
];

export default function NotificationPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">Notifications</h3>
        <span className="text-xs text-blue-500 font-medium cursor-pointer hover:underline">Mark all as read</span>
      </div>
      <div className="divide-y divide-slate-100">
        {notifications.map((n) => {
          const Icon = n.icon;
          return (
            <div key={n.id} className={`flex items-start gap-3 px-5 py-4 hover:bg-slate-50/50 transition-colors ${!n.read ? 'bg-blue-50/30' : ''}`}>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${!n.read ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${!n.read ? 'text-slate-800' : 'text-slate-600'}`}>{n.title}</p>
                <p className="text-xs text-slate-400 mt-0.5 truncate">{n.desc}</p>
              </div>
              <span className="text-[11px] text-slate-400 shrink-0">{n.time}</span>
              {!n.read && <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

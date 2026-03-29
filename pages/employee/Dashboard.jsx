import PresenceWidget from '../../components/dashboard/PresenceWidget';
import LeaveBalance from '../../components/leave/LeaveBalance';
import TeamMembers from '../../components/dashboard/TeamMembers';
import TodayLeave from '../../components/dashboard/TodayLeave';
import UpcomingLeave from '../../components/dashboard/UpcomingLeave';
import NotificationPanel from '../../components/NotificationPanel';
import Button from '../../components/common/Button';
import HolidayCalendar from '../../components/employee/HolidayCalendar';
import AttendanceReport from '../../components/employee/AttendanceReport';
import { CalendarDays, LogIn, ListTodo } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">My Dashboard</h2>
        <p className="text-sm text-slate-500 mt-1">Your personal workspace overview</p>
      </div>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3">
        <Button><LogIn size={14} /> Mark Attendance</Button>
        <Button variant="secondary"><CalendarDays size={14} /> Apply Leave</Button>
        <Button variant="secondary"><ListTodo size={14} /> Add Work Log</Button>
      </div>

      {/* Presence + Leave balance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PresenceWidget />
        <LeaveBalance />
      </div>

      {/* Team + Leaves */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TeamMembers />
        <TodayLeave />
        <UpcomingLeave />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-7">
          <HolidayCalendar />
        </div>
        <div className="xl:col-span-5">
          <AttendanceReport />
        </div>
      </div>

      {/* Notifications */}
      <NotificationPanel />
    </div>
  );
}

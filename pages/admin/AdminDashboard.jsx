import DashboardCard from '../../components/dashboard/DashboardCard';
import AttendanceTable from '../../components/attendance/AttendanceTable';
import LeaveTable from '../../components/leave/LeaveTable';
import AttendanceReport from '../../components/reports/AttendanceReport';
import LeaveReport from '../../components/reports/LeaveReport';
import { Users, UserCheck, CalendarDays, Home, Clock } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Admin Dashboard</h2>
        <p className="text-sm text-slate-500 mt-1">Overview of your organization</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger">
        <DashboardCard title="Total Employees"    value="58"  icon={Users}       color="blue"   trend="up"   trendValue="+3 this month" />
        <DashboardCard title="Today's Attendance"  value="48"  icon={UserCheck}   color="green"  trend="up"   trendValue="82.7%" />
        <DashboardCard title="On Leave"            value="5"   icon={CalendarDays} color="orange" trend="down" trendValue="-2 vs yesterday" />
        <DashboardCard title="Work From Home"      value="8"   icon={Home}        color="cyan"   />
        <DashboardCard title="Pending Requests"    value="7"   icon={Clock}       color="purple" subtitle="Needs attention" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceReport />
        <LeaveReport />
      </div>

      {/* Tables */}
      <AttendanceTable />
      <LeaveTable showActions />
    </div>
  );
}

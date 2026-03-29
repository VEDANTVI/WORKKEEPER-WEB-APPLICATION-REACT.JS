import DashboardCard from '../../components/dashboard/DashboardCard';
import AttendanceTable from '../../components/attendance/AttendanceTable';
import LeaveTable from '../../components/leave/LeaveTable';
import AttendanceReport from '../../components/reports/AttendanceReport';
import { Users, UserCheck, CalendarDays, Clock, AlertTriangle } from 'lucide-react';

export default function HRDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">HR Dashboard</h2>
        <p className="text-sm text-slate-500 mt-1">Track attendance, leaves, and employee status</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger">
        <DashboardCard title="Total Employees"     value="58"  icon={Users}           color="blue"   trend="up"   trendValue="+3" />
        <DashboardCard title="Today's Attendance"   value="48"  icon={UserCheck}       color="green"  trend="up"   trendValue="82.7%" />
        <DashboardCard title="Pending Requests"     value="4"   icon={Clock}           color="orange" subtitle="Awaiting review" />
        <DashboardCard title="On Leave"             value="5"   icon={CalendarDays}    color="purple" />
        <DashboardCard title="Late Arrivals"        value="3"   icon={AlertTriangle}   color="red"    trend="down" trendValue="-1" />
      </div>

      <AttendanceReport />

      <div className="grid grid-cols-1 gap-6">
        <LeaveTable showActions />
        <AttendanceTable />
      </div>
    </div>
  );
}

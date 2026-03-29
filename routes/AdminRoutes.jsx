import { Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminProfile from '../pages/admin/AdminProfile';
import EmployeeManagement from '../pages/admin/EmployeeManagement';
import AttendanceManagement from '../pages/admin/AttendanceManagement';
import LeaveManagement from '../pages/admin/LeaveManagement';
import ShiftManagement from '../pages/admin/ShiftManagement';
import HolidayCalendar from '../pages/admin/HolidayCalendar';
import Reports from '../pages/admin/Reports';
import RolePermission from '../pages/admin/RolePermission';
import Settings from '../pages/admin/Settings';
import AuditLogs from '../pages/admin/AuditLogs';
import Notifications from '../pages/shared/Notifications';

export const adminRoutes = (
  <>
    <Route index element={<AdminDashboard />} />
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="profile" element={<AdminProfile />} />
    <Route path="employees" element={<EmployeeManagement />} />
    <Route path="attendance" element={<AttendanceManagement />} />
    <Route path="leaves" element={<LeaveManagement />} />
    <Route path="shifts" element={<ShiftManagement />} />
    <Route path="holidays" element={<HolidayCalendar />} />
    <Route path="reports" element={<Reports />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="roles" element={<RolePermission />} />
    <Route path="settings" element={<Settings />} />
    <Route path="audit-logs" element={<AuditLogs />} />
  </>
);

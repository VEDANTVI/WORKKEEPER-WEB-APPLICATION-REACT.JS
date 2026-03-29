import { Route } from 'react-router-dom';
import HRDashboard from '../pages/hr/HRDashboard';
import HRProfile from '../pages/hr/HRProfile';
import Employees from '../pages/hr/Employees';
import Attendance from '../pages/hr/Attendance';
import LeaveApproval from '../pages/hr/LeaveApproval';
import WFHRequests from '../pages/hr/WFHRequests';
import Reports from '../pages/hr/Reports';
import Notifications from '../pages/shared/Notifications';
import HolidayCalendar from '../pages/admin/HolidayCalendar';

export const hrRoutes = (
  <>
    <Route index element={<HRDashboard />} />
    <Route path="dashboard" element={<HRDashboard />} />
    <Route path="profile" element={<HRProfile />} />
    <Route path="employees" element={<Employees />} />
    <Route path="attendance" element={<Attendance />} />
    <Route path="leaves" element={<LeaveApproval />} />
    <Route path="wfh" element={<WFHRequests />} />
    <Route path="reports" element={<Reports />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="holidays" element={<HolidayCalendar />} />
  </>
);

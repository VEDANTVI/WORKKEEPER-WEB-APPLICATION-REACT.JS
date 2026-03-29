import { Route } from 'react-router-dom';
import Dashboard from '../pages/employee/Dashboard';
import MyAttendance from '../pages/employee/MyAttendance';
import MyLeave from '../pages/employee/MyLeave';
import WorkLog from '../pages/employee/WorkLog';
import TeamMembers from '../pages/employee/TeamMembers';
import Profile from '../pages/employee/Profile';
import Notifications from '../pages/shared/Notifications';

export const employeeRoutes = (
  <>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="my-attendance" element={<MyAttendance />} />
    <Route path="my-leave" element={<MyLeave />} />
    <Route path="work-log" element={<WorkLog />} />
    <Route path="team" element={<TeamMembers />} />
    <Route path="profile" element={<Profile />} />
    <Route path="notifications" element={<Notifications />} />
  </>
);

import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layout/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';
import { adminRoutes } from './AdminRoutes';
import { hrRoutes } from './HRRoutes';
import { employeeRoutes } from './EmployeeRoutes';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth routes (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin panel */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {adminRoutes}
      </Route>

      {/* HR panel */}
      <Route
        path="/hr/*"
        element={
          <ProtectedRoute allowedRoles={['hr', 'admin']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {hrRoutes}
      </Route>

      {/* Employee panel */}
      <Route
        path="/*"
        element={
          <ProtectedRoute allowedRoles={['employee', 'hr', 'admin']}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {employeeRoutes}
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}

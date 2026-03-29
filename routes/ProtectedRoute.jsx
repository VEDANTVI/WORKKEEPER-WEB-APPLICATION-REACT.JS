import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const paths = { admin: '/admin/dashboard', hr: '/hr/dashboard', employee: '/dashboard' };
    return <Navigate to={paths[user.role] || '/login'} replace />;
  }
  return children;
}

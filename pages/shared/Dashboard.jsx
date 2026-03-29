import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" replace />;

  const paths = {
    admin: '/admin/dashboard',
    hr: '/hr/dashboard',
    employee: '/dashboard',
  };

  return <Navigate to={paths[user.role] || '/login'} replace />;
}

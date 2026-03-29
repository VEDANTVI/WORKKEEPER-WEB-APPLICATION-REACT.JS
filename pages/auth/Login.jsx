import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('admin');

  const handleLogin = (e) => {
    e.preventDefault();
    login(selectedRole);
    const paths = { admin: '/admin/dashboard', hr: '/hr/dashboard', employee: '/dashboard' };
    navigate(paths[selectedRole]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 mb-4">
            <Briefcase size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">WorkKeeper</h1>
          <p className="text-blue-300 text-sm mt-1">Web Application Management System</p>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Login As</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-blue-200 mb-1.5">Email</label>
              <input
                type="email"
                defaultValue="admin@workkeeper.com"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-blue-200 mb-1.5">Password</label>
              <input
                type="password"
                defaultValue="password123"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-blue-200 mb-1.5">Login As</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 appearance-none cursor-pointer"
              >
                <option value="admin" className="text-slate-800">Administrator</option>
                <option value="hr" className="text-slate-800">HR Manager</option>
                <option value="employee" className="text-slate-800">Employee</option>
              </select>
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-blue-200 cursor-pointer">
                <input type="checkbox" className="rounded border-white/30" /> Remember me
              </label>
              <a href="#" className="text-blue-300 hover:text-blue-200 transition-colors">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Login As <ArrowRight size={16} />
            </button>
          </form>
          <p className="text-center text-xs text-blue-300 mt-6">
            Don't have an account? <Link to="/signup" className="text-white font-medium hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

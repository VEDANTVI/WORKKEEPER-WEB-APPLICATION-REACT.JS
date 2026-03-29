import { Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 mb-4">
            <Briefcase size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">WorkKeeper</h1>
          <p className="text-blue-300 text-sm mt-1">Create your account</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Sign Up</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-blue-200 mb-1.5">First Name</label>
                <input className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="John" />
              </div>
              <div>
                <label className="block text-xs font-medium text-blue-200 mb-1.5">Last Name</label>
                <input className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-blue-200 mb-1.5">Email</label>
              <input type="email" className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-xs font-medium text-blue-200 mb-1.5">Password</label>
              <input type="password" className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="••••••••" />
            </div>
            <div>
              <label className="block text-xs font-medium text-blue-200 mb-1.5">Company Code</label>
              <input className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="Enter company code" />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-blue-500/30"
            >
              Create Account
            </button>
          </form>
          <p className="text-center text-xs text-blue-300 mt-6">
            Already have an account? <Link to="/login" className="text-white font-medium hover:underline">Login As</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

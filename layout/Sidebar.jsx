import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ADMIN_NAV, HR_NAV, EMPLOYEE_NAV, ROLE_LABELS } from '../utils/constants';
import { getInitials } from '../utils/helpers';
import { Briefcase, X, LogOut } from 'lucide-react';
import { useEffect, useRef } from 'react';

const navMap = { admin: ADMIN_NAV, hr: HR_NAV, employee: EMPLOYEE_NAV };

export default function Sidebar({ isOpen, onClose }) {
  const { user } = useAuth();
  const location = useLocation();
  const sidebarRef = useRef(null);
  const items = navMap[user?.role] || EMPLOYEE_NAV;

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Trap focus inside sidebar when open
  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      const firstLink = sidebarRef.current.querySelector('a, button');
      firstLink?.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay / Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Drawer */}
      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-50 w-72 flex flex-col bg-slate-900
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* ── Header ─────────────────────────────── */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Briefcase size={20} className="text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              WorkKeeper
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close navigation"
          >
            <X size={18} className="text-slate-400" />
          </button>
        </div>

        {/* ── Navigation Items ───────────────────── */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                            transition-all duration-200
                            ${active
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            }`}
              >
                <Icon
                  size={20}
                  className={`shrink-0 transition-colors ${
                    active ? 'text-blue-400' : 'text-slate-500 group-hover:text-white'
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* ── User Profile (bottom) ──────────────── */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {getInitials(user?.name || 'U')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user?.name}</p>
              <p className="text-[11px] text-slate-400">{ROLE_LABELS[user?.role]}</p>
            </div>
            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" aria-label="Sign out">
              <LogOut size={16} className="text-slate-400" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

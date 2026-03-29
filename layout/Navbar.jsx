import { useAuth } from '../context/AuthContext';
import { ROLE_LABELS } from '../utils/constants';
import { getGreeting, getInitials } from '../utils/helpers';
import {
  Bell, Search, ChevronDown, Menu,
  User, Settings, LogOut, ShieldCheck, ArrowRightLeft,
} from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationDropdown from '../components/NotificationDropdown';

export default function Navbar({ onMenuClick }) {
  const { user, switchRole, logout } = useAuth();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const dropdownRef = useRef(null);
  const bellRef = useRef(null);

  // ── Close dropdown on outside click ──────────────────
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setShowLogoutConfirm(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Close dropdown on Escape key ─────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setShowLogoutConfirm(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // ── Logout flow ──────────────────────────────────────
  const handleLogoutClick = useCallback(() => {
    setShowLogoutConfirm(true);
  }, []);

  const handleLogoutConfirm = useCallback(() => {
    setLoggingOut(true);
    // Small delay for visual feedback
    setTimeout(() => {
      logout();
      navigate('/login', { replace: true });
    }, 400);
  }, [logout, navigate]);

  const handleLogoutCancel = useCallback(() => {
    setShowLogoutConfirm(false);
  }, []);

  // ── Role switch handler ──────────────────────────────
  const handleRoleSwitch = useCallback((role) => {
    switchRole(role);
    setDropdownOpen(false);
    const paths = { admin: '/admin/dashboard', hr: '/hr/dashboard', employee: '/dashboard' };
    navigate(paths[role]);
  }, [switchRole, navigate]);

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 sm:px-6">
      {/* ── Left — hamburger + greeting ────────────── */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600"
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>
        <div className="hidden sm:block">
          <h1 className="text-lg font-semibold text-slate-800">
            {getGreeting()}, {user?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-xs text-slate-500">Here's what's happening today</p>
        </div>
      </div>

      {/* ── Right — search, bell, profile ──────────── */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 text-sm text-slate-500 w-56">
          <Search size={16} />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            ref={bellRef}
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors"
            id="notification-btn"
            aria-expanded={notificationOpen}
            aria-haspopup="true"
          >
            <Bell size={20} className="text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </button>
          
          {/* Notification Dropdown */}
          <NotificationDropdown 
            isOpen={notificationOpen} 
            onClose={() => setNotificationOpen(false)}
            triggerRef={bellRef}
          />
        </div>

        {/* ── Profile Dropdown ─────────────────────── */}
        <div className="relative" ref={dropdownRef}>
          {/* Trigger */}
          <button
            onClick={() => { setDropdownOpen(!dropdownOpen); setShowLogoutConfirm(false); }}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            id="profile-menu-btn"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white shadow-sm">
              {getInitials(user?.name || 'U')}
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-slate-700 leading-tight">{user?.name}</p>
              <p className="text-[11px] text-slate-400">{ROLE_LABELS[user?.role]}</p>
            </div>
            <ChevronDown
              size={14}
              className={`text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Panel */}
          <div
            className={`absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200
                        origin-top-right transition-all duration-200 ease-out
                        ${dropdownOpen
                          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                        }`}
            role="menu"
            aria-labelledby="profile-menu-btn"
          >
            {/* ── User Info Header ──────────────────── */}
            <div className="px-4 pt-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  {getInitials(user?.name || 'U')}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 truncate">{user?.name}</p>
                  <p className="text-xs text-slate-400 truncate">{user?.email}</p>
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-600">
                  <ShieldCheck size={12} />
                  {ROLE_LABELS[user?.role]}
                </span>
              </div>
            </div>

            {/* ── Menu Items ────────────────────────── */}
            <div className="py-1.5">
              {/* Profile */}
              <button
                onClick={() => {
                  setDropdownOpen(false);
                  const profilePaths = {
                    admin: '/admin/profile',
                    hr: '/hr/profile',
                    employee: '/profile'
                  };
                  navigate(profilePaths[user?.role] || '/profile');
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                role="menuitem"
              >
                <User size={16} className="text-slate-400" />
                <span>My Profile</span>
              </button>

              {/* Settings */}
              <button
                onClick={() => { setDropdownOpen(false); navigate(user?.role === 'admin' ? '/admin/settings' : '#'); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                role="menuitem"
              >
                <Settings size={16} className="text-slate-400" />
                <span>Settings</span>
              </button>
            </div>

            {/* ── Role Switcher ─────────────────────── */}
            <div className="border-t border-slate-100 py-1.5">
              <p className="px-4 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <ArrowRightLeft size={11} />
                Switch Role
              </p>
              {['admin', 'hr', 'employee'].map((role) => (
                <button
                  key={role}
                  onClick={() => handleRoleSwitch(role)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    user?.role === role
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  role="menuitem"
                >
                  {ROLE_LABELS[role]}
                </button>
              ))}
            </div>

            {/* ── Logout Section ────────────────────── */}
            <div className="border-t border-slate-100 p-2">
              {!showLogoutConfirm ? (
                /* Logout Button */
                <button
                  onClick={handleLogoutClick}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  role="menuitem"
                >
                  <LogOut size={16} />
                  <span>Sign out</span>
                </button>
              ) : (
                /* Confirmation */
                <div className="animate-fade-in">
                  <p className="text-xs text-slate-500 text-center mb-2">Are you sure you want to sign out?</p>
                  <div className="flex gap-2">
                    <button
                      onClick={handleLogoutCancel}
                      disabled={loggingOut}
                      className="flex-1 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogoutConfirm}
                      disabled={loggingOut}
                      className="flex-1 px-3 py-2 text-xs font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
                    >
                      {loggingOut ? (
                        <>
                          <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Signing out...
                        </>
                      ) : (
                        'Yes, sign out'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

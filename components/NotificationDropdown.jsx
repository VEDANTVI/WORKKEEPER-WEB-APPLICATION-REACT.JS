import { Bell, CheckCircle, Info, AlertTriangle, Calendar, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NOTIFICATION_DATA = [
  { id: 1, icon: Calendar, title: 'Leave Approved', desc: 'Your sick leave for 10-11 Mar has been approved.', time: '2h ago', read: false },
  { id: 2, icon: Bell, title: 'New Company Policy', desc: 'Updated remote work policy has been published.', time: '5h ago', read: false },
  { id: 3, icon: CheckCircle, title: 'Attendance Marked', desc: 'Your attendance for today has been recorded.', time: '8h ago', read: true },
  { id: 4, icon: Info, title: 'Holiday Notification', desc: 'Office will be closed on 26 Mar for Holi.', time: '1d ago', read: true },
  { id: 5, icon: AlertTriangle, title: 'Pending Timesheet', desc: 'Please submit your timesheet for last week.', time: '2d ago', read: true },
];

export default function NotificationDropdown({ isOpen, onClose, triggerRef }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [notifications, setNotifications] = useState(NOTIFICATION_DATA);
  const unreadCount = notifications.filter(n => !n.read).length;

  // Navigate to notifications page based on user role
  const handleViewAllNotifications = () => {
    const notificationPaths = {
      admin: '/admin/notifications',
      hr: '/hr/notifications',
      employee: '/notifications'
    };
    const path = notificationPaths[user?.role] || '/notifications';
    navigate(path);
    onClose();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        triggerRef.current && !triggerRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose, triggerRef]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-slate-200
                  origin-top-right transition-all duration-200 ease-out
                  ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                  }`}
      role="menu"
      aria-labelledby="notification-btn"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-slate-800">Notifications</h3>
          {unreadCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Notifications List */}
      <div className="max-h-96 overflow-y-auto divide-y divide-slate-100">
        {notifications.length > 0 ? (
          notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`flex items-start gap-3 px-5 py-4 hover:bg-slate-50/50 transition-colors cursor-pointer group ${
                  !notification.read ? 'bg-blue-50/50' : ''
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                {/* Icon */}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                  !notification.read ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'
                }`}>
                  <Icon size={16} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${!notification.read ? 'text-slate-800' : 'text-slate-600'}`}>
                    {notification.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                    {notification.desc}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {notification.time}
                  </p>
                </div>

                {/* Unread Indicator + Delete */}
                <div className="flex items-center gap-2 shrink-0">
                  {!notification.read && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notification.id);
                    }}
                    className="hidden group-hover:flex items-center justify-center w-6 h-6 rounded-lg hover:bg-slate-200/50 text-slate-400 hover:text-slate-600 transition-colors"
                    title="Delete notification"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="px-5 py-8 text-center">
            <Bell size={32} className="text-slate-300 mx-auto mb-2" />
            <p className="text-sm text-slate-500">No notifications</p>
          </div>
        )}
      </div>

      {/* Footer */}
      {notifications.length > 0 && (
        <div className="px-5 py-3 border-t border-slate-100 text-center">
          <button 
            onClick={handleViewAllNotifications}
            className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            View all notifications
          </button>
        </div>
      )}
    </div>
  );
}

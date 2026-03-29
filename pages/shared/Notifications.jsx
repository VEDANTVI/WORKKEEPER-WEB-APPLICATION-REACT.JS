import { useState, useMemo } from 'react';
import { Bell, CheckCircle, Info, AlertTriangle, Calendar, Trash2, CheckIcon, Filter } from 'lucide-react';
import Button from '../../components/common/Button';

const NOTIFICATION_DATA = [
  { id: 1, icon: Calendar, title: 'Leave Approved', desc: 'Your sick leave for 10-11 Mar has been approved.', time: '2h ago', read: false, category: 'leave' },
  { id: 2, icon: Bell, title: 'New Company Policy', desc: 'Updated remote work policy has been published.', time: '5h ago', read: false, category: 'policy' },
  { id: 3, icon: CheckCircle, title: 'Attendance Marked', desc: 'Your attendance for today has been recorded.', time: '8h ago', read: true, category: 'attendance' },
  { id: 4, icon: Info, title: 'Holiday Notification', desc: 'Office will be closed on 26 Mar for Holi.', time: '1d ago', read: true, category: 'holiday' },
  { id: 5, icon: AlertTriangle, title: 'Pending Timesheet', desc: 'Please submit your timesheet for last week.', time: '2d ago', read: true, category: 'alert' },
  { id: 6, icon: Calendar, title: 'Team Meeting Scheduled', desc: 'New team meeting scheduled for tomorrow at 2 PM.', time: '3d ago', read: true, category: 'meeting' },
  { id: 7, icon: CheckCircle, title: 'Performance Review Due', desc: 'Your Q1 performance review is due by March 31.', time: '5d ago', read: true, category: 'review' },
  { id: 8, icon: AlertTriangle, title: 'Leave Balance Low', desc: 'You have only 3 days of leave remaining.', time: '1w ago', read: true, category: 'leave' },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(NOTIFICATION_DATA);
  const [filterUnread, setFilterUnread] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter notifications
  const filteredNotifications = useMemo(() => {
    return notifications.filter(n => {
      const unreadMatch = !filterUnread || !n.read;
      const categoryMatch = selectedCategory === 'all' || n.category === selectedCategory;
      return unreadMatch && categoryMatch;
    });
  }, [notifications, filterUnread, selectedCategory]);

  const unreadCount = notifications.filter(n => !n.read).length;
  const categories = ['all', 'leave', 'policy', 'attendance', 'holiday', 'alert', 'meeting', 'review'];

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
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">All Notifications</h2>
          <p className="text-sm text-slate-500 mt-1">Stay updated with all your activities and updates</p>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <Button 
              size="sm" 
              variant="secondary"
              onClick={markAllAsRead}
            >
              <CheckIcon size={14} /> Mark all as read
            </Button>
          )}
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Unread Filter */}
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-slate-600" />
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterUnread}
                onChange={(e) => setFilterUnread(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-blue-600 cursor-pointer"
              />
              <span className="text-sm font-medium text-slate-700">Unread only</span>
            </label>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors capitalize ${
                  selectedCategory === cat
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`bg-white rounded-2xl border transition-all hover:shadow-md cursor-pointer group ${
                  !notification.read
                    ? 'border-blue-200 shadow-sm'
                    : 'border-slate-100 shadow-sm hover:border-slate-200'
                }`}
              >
                <div className="p-5 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      !notification.read
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className={`text-base font-semibold ${!notification.read ? 'text-slate-800' : 'text-slate-600'}`}>
                          {notification.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                          {notification.desc}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <span className="text-xs text-slate-400">
                            {notification.time}
                          </span>
                          <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full capitalize">
                            {notification.category}
                          </span>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full" />
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 shrink-0">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors opacity-0 group-hover:opacity-100"
                            title="Mark as read"
                          >
                            <CheckIcon size={18} />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                          title="Delete notification"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 text-center">
            <Bell size={48} className="text-slate-300 mx-auto mb-4" />
            <p className="text-lg font-semibold text-slate-600 mb-2">No notifications</p>
            <p className="text-sm text-slate-500">
              {filterUnread ? 'You are all caught up!' : 'No notifications to display'}
            </p>
          </div>
        )}
      </div>

      {/* Stats */}
      {notifications.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <p className="text-sm text-slate-500 mb-1">Total Notifications</p>
            <p className="text-2xl font-bold text-slate-800">{notifications.length}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <p className="text-sm text-slate-500 mb-1">Unread</p>
            <p className="text-2xl font-bold text-blue-600">{unreadCount}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <p className="text-sm text-slate-500 mb-1">Read</p>
            <p className="text-2xl font-bold text-emerald-600">{notifications.length - unreadCount}</p>
          </div>
        </div>
      )}
    </div>
  );
}

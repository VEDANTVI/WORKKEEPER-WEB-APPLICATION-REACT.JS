/* ── Sidebar navigation configs per role ────────────── */
import {
  LayoutDashboard, Users, ClipboardList, CalendarDays, Clock,
  CalendarRange, BarChart3, Bell, Shield, Settings, FileText,
  UserCheck, Home, Briefcase, UserCircle, ListTodo, UsersRound,
} from 'lucide-react';

export const ADMIN_NAV = [
  { label: 'Dashboard',        icon: LayoutDashboard, path: '/admin/dashboard' },
  { label: 'Employees',        icon: Users,           path: '/admin/employees' },
  { label: 'Attendance',       icon: ClipboardList,   path: '/admin/attendance' },
  { label: 'Leave Management', icon: CalendarDays,    path: '/admin/leaves' },
  { label: 'Shift Management', icon: Clock,           path: '/admin/shifts' },
  { label: 'Holiday Calendar', icon: CalendarRange,   path: '/admin/holidays' },
  { label: 'Reports',          icon: BarChart3,       path: '/admin/reports' },
  { label: 'Notifications',    icon: Bell,            path: '/admin/notifications' },
  { label: 'Roles & Permissions', icon: Shield,       path: '/admin/roles' },
  { label: 'Settings',         icon: Settings,        path: '/admin/settings' },
  { label: 'Audit Logs',       icon: FileText,        path: '/admin/audit-logs' },
];

export const HR_NAV = [
  { label: 'Dashboard',           icon: LayoutDashboard, path: '/hr/dashboard' },
  { label: 'Employee Records',    icon: Users,           path: '/hr/employees' },
  { label: 'Attendance Mgmt',     icon: ClipboardList,   path: '/hr/attendance' },
  { label: 'Leave Approval',      icon: CalendarDays,    path: '/hr/leaves' },
  { label: 'WFH Requests',        icon: Home,            path: '/hr/wfh' },
  { label: 'Reports',             icon: BarChart3,       path: '/hr/reports' },
  { label: 'Notifications',       icon: Bell,            path: '/hr/notifications' },
  { label: 'Holiday Calendar',    icon: CalendarRange,   path: '/hr/holidays' },
];

export const EMPLOYEE_NAV = [
  { label: 'Dashboard',     icon: LayoutDashboard, path: '/dashboard' },
  { label: 'My Attendance', icon: UserCheck,        path: '/my-attendance' },
  { label: 'My Leave',      icon: CalendarDays,     path: '/my-leave' },
  { label: 'Work Log',      icon: ListTodo,         path: '/work-log' },
  { label: 'Team Members',  icon: UsersRound,       path: '/team' },
  { label: 'Notifications', icon: Bell,             path: '/notifications' },
  { label: 'Profile',       icon: UserCircle,       path: '/profile' },
];

export const ROLE_LABELS = {
  admin: 'Administrator',
  hr: 'HR Manager',
  employee: 'Employee',
};

export const STATUS_COLORS = {
  present:  { bg: '#dcfce7', text: '#166534' },
  absent:   { bg: '#fee2e2', text: '#991b1b' },
  late:     { bg: '#fef9c3', text: '#854d0e' },
  leave:    { bg: '#e0e7ff', text: '#3730a3' },
  wfh:      { bg: '#f0fdfa', text: '#115e59' },
  pending:  { bg: '#fef3c7', text: '#92400e' },
  approved: { bg: '#d1fae5', text: '#065f46' },
  rejected: { bg: '#fee2e2', text: '#991b1b' },
};

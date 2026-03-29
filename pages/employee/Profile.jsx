import { useAuth } from '../../context/AuthContext';
import Button from '../../components/common/Button';
import { getInitials } from '../../utils/helpers';
import { Edit, Mail, Phone, MapPin, Building2, Briefcase, Calendar, Badge, Clock } from 'lucide-react';
import { useMemo } from 'react';

// Enhanced mock user data with complete profile information
const USER_PROFILES = {
  admin: {
    name: 'Rajesh Kumar',
    email: 'admin@workkeeper.com',
    phone: '+91 98765 43210',
    role: 'Admin',
    department: 'Management',
    designation: 'System Administrator',
    employeeId: 'WK-ADM-001',
    joiningDate: '10 Jan 2023',
    reportingManager: 'Company Director',
    location: 'Mumbai, India',
    employmentType: 'Full-time',
    status: 'Active',
  },
  hr: {
    name: 'Priya Sharma',
    email: 'hr@workkeeper.com',
    phone: '+91 87654 32109',
    role: 'HR',
    department: 'Human Resources',
    designation: 'HR Manager',
    employeeId: 'WK-HR-001',
    joiningDate: '20 Feb 2023',
    reportingManager: 'Rajesh Kumar',
    location: 'Mumbai, India',
    employmentType: 'Full-time',
    status: 'Active',
  },
  employee: {
    name: 'Amit Patel',
    email: 'amit@workkeeper.com',
    phone: '+91 76543 21098',
    role: 'Employee',
    department: 'Engineering',
    designation: 'Frontend Developer',
    employeeId: 'WK-EMP-001',
    joiningDate: '15 Jan 2024',
    reportingManager: 'Rahul Singh',
    location: 'Mumbai, India',
    employmentType: 'Full-time',
    status: 'Active',
  },
};

const getRoleColor = (role) => {
  switch (role?.toLowerCase()) {
    case 'admin':
      return { bg: 'bg-red-50', text: 'text-red-700', badge: 'bg-red-100' };
    case 'hr':
      return { bg: 'bg-purple-50', text: 'text-purple-700', badge: 'bg-purple-100' };
    case 'employee':
      return { bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-100' };
    default:
      return { bg: 'bg-slate-50', text: 'text-slate-700', badge: 'bg-slate-100' };
  }
};

const getAvatarGradient = (role) => {
  switch (role?.toLowerCase()) {
    case 'admin':
      return 'from-red-500 to-pink-600';
    case 'hr':
      return 'from-purple-500 to-pink-600';
    case 'employee':
      return 'from-blue-500 to-indigo-600';
    default:
      return 'from-slate-500 to-slate-600';
  }
};

export default function Profile() {
  const { user } = useAuth();
  
  // Get profile data based on user role
  const profileData = useMemo(() => {
    const role = user?.role || 'employee';
    return USER_PROFILES[role] || USER_PROFILES.employee;
  }, [user?.role]);

  const roleColors = getRoleColor(profileData.role);
  const avatarGradient = getAvatarGradient(profileData.role);

  // Section data for organized display
  const sections = [
    {
      title: 'Contact Information',
      icon: Mail,
      items: [
        { label: 'Email', value: profileData.email, icon: Mail },
        { label: 'Phone', value: profileData.phone, icon: Phone },
        { label: 'Location', value: profileData.location, icon: MapPin },
      ]
    },
    {
      title: 'Professional Information',
      icon: Briefcase,
      items: [
        { label: 'Designation', value: profileData.designation },
        { label: 'Department', value: profileData.department },
        { label: 'Reporting Manager', value: profileData.reportingManager },
        { label: 'Employment Type', value: profileData.employmentType },
      ]
    },
    {
      title: 'Employment Details',
      icon: Calendar,
      items: [
        { label: 'Employee ID', value: profileData.employeeId },
        { label: 'Joining Date', value: profileData.joiningDate },
        { label: 'Status', value: profileData.status },
      ]
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">My Profile</h2>
          <p className="text-sm text-slate-500 mt-1">Manage your personal and professional information</p>
        </div>
        <Button variant="secondary" size="sm"><Edit size={14} /> Edit Profile</Button>
      </div>

      {/* Profile Header Card */}
      <div className={`${roleColors.bg} rounded-2xl border border-slate-200 p-8 md:p-12`}>
        <div className="flex flex-col md:flex-row md:items-end gap-6">
          {/* Avatar */}
          <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${avatarGradient} flex items-center justify-center text-white font-bold text-4xl shadow-lg`}>
            {getInitials(profileData.name)}
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{profileData.name}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`${roleColors.badge} ${roleColors.text} px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide`}>
                    {profileData.role}
                  </span>
                  <span className="text-slate-600 font-medium">{profileData.designation}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600 mb-1">Status</p>
                <p className="text-lg font-bold text-emerald-600 flex items-center gap-2 justify-end md:justify-start">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  {profileData.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const SectionIcon = section.icon;
          return (
            <div key={section.title} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <SectionIcon size={20} className="text-blue-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-800">{section.title}</h3>
              </div>

              {/* Section Items */}
              <div className="space-y-4">
                {section.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-3">
                      {ItemIcon && (
                        <div className="pt-0.5">
                          <ItemIcon size={18} className="text-slate-400" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-slate-700 break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={Badge} label="Employee ID" value={profileData.employeeId} color="blue" />
        <StatCard icon={Building2} label="Department" value={profileData.department} color="purple" />
        <StatCard icon={Clock} label="Experience" value="1+ Year" color="emerald" />
        <StatCard icon={Calendar} label="Joining Date" value={profileData.joiningDate} color="amber" />
      </div>

      {/* Danger Zone (Optional) */}
      <div className="bg-red-50 rounded-2xl border border-red-100 p-6">
        <h3 className="text-base font-semibold text-red-900 mb-2">Account Actions</h3>
        <p className="text-sm text-red-700 mb-4">
          Last login: Recently • Change password or manage security settings from account settings
        </p>
        <Button variant="secondary" size="sm">Manage Account Settings</Button>
      </div>
    </div>
  );
}

// Reusable StatCard Component
function StatCard({ icon: Icon, label, value, color = 'blue' }) {
  const colorMap = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
  };

  const style = colorMap[color] || colorMap.blue;

  return (
    <div className={`${style.bg} rounded-xl border ${style.border} p-4 text-center`}>
      <Icon size={24} className={`${style.text} mx-auto mb-2`} />
      <p className="text-xs text-slate-600 uppercase tracking-wider mb-1">{label}</p>
      <p className={`font-bold ${style.text} truncate`}>{value}</p>
    </div>
  );
}

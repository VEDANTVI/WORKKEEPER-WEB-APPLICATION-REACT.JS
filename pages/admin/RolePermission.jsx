import { Shield, Edit, Trash2, Plus } from 'lucide-react';
import Button from '../../components/common/Button';

const roles = [
  { name: 'Administrator',  users: 2,  permissions: ['All Access'] },
  { name: 'HR Manager',     users: 3,  permissions: ['Employee Mgmt', 'Attendance', 'Leave Mgmt', 'Reports'] },
  { name: 'Team Lead',      users: 8,  permissions: ['Team Attendance', 'Leave Approval', 'Reports'] },
  { name: 'Employee',       users: 45, permissions: ['Self Attendance', 'Self Leave', 'Profile'] },
];

export default function RolePermission() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Roles & Permissions</h2>
          <p className="text-sm text-slate-500 mt-1">Manage user roles and access controls</p>
        </div>
        <Button size="sm"><Plus size={14} /> Add Role</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roles.map((r) => (
          <div key={r.name} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Shield size={18} className="text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-700">{r.name}</h4>
                  <p className="text-xs text-slate-400">{r.users} users</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"><Edit size={14} className="text-slate-400" /></button>
                <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors"><Trash2 size={14} className="text-slate-400" /></button>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {r.permissions.map((p) => (
                <span key={p} className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full">{p}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

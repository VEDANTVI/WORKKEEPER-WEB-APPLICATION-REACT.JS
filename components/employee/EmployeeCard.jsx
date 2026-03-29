import { getInitials } from '../../utils/helpers';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function EmployeeCard({ employee = {} }) {
  const {
    name = 'Amit Patel',
    email = 'amit@workkeeper.com',
    phone = '+91 98765 43210',
    role = 'Frontend Developer',
    dept = 'Engineering',
    location = 'Mumbai, India',
  } = employee;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-blue-500/20">
          {getInitials(name)}
        </div>
        <div>
          <h4 className="text-base font-semibold text-slate-800">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
          <span className="inline-block mt-1 text-xs bg-blue-50 text-blue-600 font-medium px-2 py-0.5 rounded-full">{dept}</span>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-slate-500"><Mail size={14} />{email}</div>
        <div className="flex items-center gap-2 text-slate-500"><Phone size={14} />{phone}</div>
        <div className="flex items-center gap-2 text-slate-500"><MapPin size={14} />{location}</div>
      </div>
    </div>
  );
}

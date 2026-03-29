import { getInitials } from '../../utils/helpers';
import { MoreVertical, Mail, Phone } from 'lucide-react';

const mockEmployees = [
  { id: 1, name: 'Amit Patel',    email: 'amit@workkeeper.com',    role: 'Frontend Developer', dept: 'Engineering', status: 'active',   joined: '15 Jan 2024' },
  { id: 2, name: 'Sonal Verma',   email: 'sonal@workkeeper.com',   role: 'Backend Developer',  dept: 'Engineering', status: 'active',   joined: '20 Mar 2023' },
  { id: 3, name: 'Rahul Singh',   email: 'rahul@workkeeper.com',   role: 'QA Engineer',        dept: 'Quality',     status: 'active',   joined: '10 Jun 2024' },
  { id: 4, name: 'Arjun Nair',    email: 'arjun@workkeeper.com',   role: 'UI Designer',        dept: 'Design',      status: 'on-leave', joined: '05 Sep 2023' },
  { id: 5, name: 'Meena Gupta',   email: 'meena@workkeeper.com',   role: 'DevOps Engineer',    dept: 'Engineering', status: 'active',   joined: '18 Nov 2023' },
  { id: 6, name: 'Deepa Joshi',   email: 'deepa@workkeeper.com',   role: 'HR Executive',       dept: 'HR',          status: 'active',   joined: '01 Feb 2024' },
  { id: 7, name: 'Kavita Menon',  email: 'kavita@workkeeper.com',  role: 'Project Manager',    dept: 'Management',  status: 'inactive', joined: '12 Aug 2022' },
];

export default function EmployeeTable({ data = mockEmployees }) {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <h3>Employee Directory</h3>
        <span>{data.length} employees</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Employee</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Role</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Department</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Joined</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase">Status</th>
              <th className="px-5 py-3 text-xs font-semibold text-slate-500 uppercase w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                      {getInitials(emp.name)}
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">{emp.name}</p>
                      <p className="text-xs text-slate-400">{emp.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-slate-600">{emp.role}</td>
                <td className="px-5 py-3 text-slate-600">{emp.dept}</td>
                <td className="px-5 py-3 text-slate-500">{emp.joined}</td>
                <td className="px-5 py-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    emp.status === 'active'   ? 'bg-emerald-50 text-emerald-600' :
                    emp.status === 'on-leave' ? 'bg-amber-50 text-amber-600' :
                                                'bg-slate-100 text-slate-500'
                  }`}>{emp.status}</span>
                </td>
                <td className="px-5 py-3">
                  <button className="p-1 rounded-lg hover:bg-slate-100 transition-colors">
                    <MoreVertical size={16} className="text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

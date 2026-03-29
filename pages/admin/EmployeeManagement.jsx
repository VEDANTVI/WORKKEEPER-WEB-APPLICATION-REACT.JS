import EmployeeTable from '../../components/employee/EmployeeTable';
import Button from '../../components/common/Button';
import { UserPlus, Download, Filter } from 'lucide-react';

export default function EmployeeManagement() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Employee Management</h2>
          <p className="text-sm text-slate-500 mt-1">Manage all employees in your organization</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm"><Filter size={14} /> Filter</Button>
          <Button variant="secondary" size="sm"><Download size={14} /> Export</Button>
          <Button size="sm"><UserPlus size={14} /> Add Employee</Button>
        </div>
      </div>
      <EmployeeTable />
    </div>
  );
}

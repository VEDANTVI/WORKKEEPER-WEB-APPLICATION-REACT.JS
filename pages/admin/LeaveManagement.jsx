import LeaveTable from '../../components/leave/LeaveTable';
import LeaveReport from '../../components/reports/LeaveReport';
import Button from '../../components/common/Button';
import { Download, Filter } from 'lucide-react';

export default function LeaveManagement() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Leave Management</h2>
          <p className="text-sm text-slate-500 mt-1">Review and manage leave requests</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm"><Filter size={14} /> Filter</Button>
          <Button variant="secondary" size="sm"><Download size={14} /> Export</Button>
        </div>
      </div>
      <LeaveReport />
      <LeaveTable showActions />
    </div>
  );
}

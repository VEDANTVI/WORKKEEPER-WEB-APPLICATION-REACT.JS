import AttendanceReport from '../../components/reports/AttendanceReport';
import LeaveReport from '../../components/reports/LeaveReport';
import WorkHoursReport from '../../components/reports/WorkHoursReport';
import Button from '../../components/common/Button';
import { Download } from 'lucide-react';

export default function Reports() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Reports</h2>
          <p className="text-sm text-slate-500 mt-1">Analytics and reports overview</p>
        </div>
        <Button variant="secondary" size="sm"><Download size={14} /> Export All</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceReport />
        <LeaveReport />
      </div>
      <WorkHoursReport />
    </div>
  );
}

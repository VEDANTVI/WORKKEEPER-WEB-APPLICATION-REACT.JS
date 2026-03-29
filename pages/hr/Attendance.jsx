import AttendanceTable from '../../components/attendance/AttendanceTable';
import AttendanceReport from '../../components/reports/AttendanceReport';
import Button from '../../components/common/Button';
import { Download, Filter } from 'lucide-react';

export default function Attendance() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Attendance Management</h2>
          <p className="text-sm text-slate-500 mt-1">Monitor team attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm"><Filter size={14} /> Filter</Button>
          <Button variant="secondary" size="sm"><Download size={14} /> Export</Button>
        </div>
      </div>
      <AttendanceReport />
      <AttendanceTable />
    </div>
  );
}

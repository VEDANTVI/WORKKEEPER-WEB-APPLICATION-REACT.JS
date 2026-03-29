import LeaveTable from '../../components/leave/LeaveTable';
import LeaveReport from '../../components/reports/LeaveReport';

export default function LeaveApproval() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Leave Approval</h2>
        <p className="text-sm text-slate-500 mt-1">Review and approve/reject leave requests</p>
      </div>
      <LeaveReport />
      <LeaveTable showActions />
    </div>
  );
}

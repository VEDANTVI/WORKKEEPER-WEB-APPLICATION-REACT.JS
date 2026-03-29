import LeaveForm from '../../components/leave/LeaveForm';
import LeaveHistory from '../../components/leave/LeaveHistory';
import LeaveBalance from '../../components/leave/LeaveBalance';

export default function MyLeave() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">My Leave</h2>
        <p className="text-sm text-slate-500 mt-1">Apply for leave and view history</p>
      </div>
      <LeaveBalance />
      <LeaveForm />
      <LeaveHistory />
    </div>
  );
}

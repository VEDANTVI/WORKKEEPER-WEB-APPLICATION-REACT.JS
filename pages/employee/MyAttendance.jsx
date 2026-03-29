import AttendanceForm from '../../components/attendance/AttendanceForm';
import AttendanceHistory from '../../components/attendance/AttendanceHistory';
import PresenceWidget from '../../components/dashboard/PresenceWidget';

export default function MyAttendance() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">My Attendance</h2>
        <p className="text-sm text-slate-500 mt-1">Track and manage your attendance</p>
      </div>
      <PresenceWidget />
      <AttendanceForm />
      <AttendanceHistory />
    </div>
  );
}

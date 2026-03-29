import { getInitials } from '../../utils/helpers';

const mockTeam = [
  { name: 'Sonal Verma',   role: 'Frontend Dev',   status: 'present' },
  { name: 'Rahul Singh',   role: 'Backend Dev',    status: 'present' },
  { name: 'Meena Gupta',   role: 'QA Engineer',    status: 'wfh' },
  { name: 'Arjun Nair',    role: 'UI Designer',    status: 'leave' },
  { name: 'Deepa Joshi',   role: 'DevOps Engineer',status: 'present' },
];

const statusDot = {
  present: 'bg-emerald-400',
  wfh:     'bg-cyan-400',
  leave:   'bg-orange-400',
  absent:  'bg-red-400',
};

export default function TeamMembers() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Team Members</h3>
      <div className="space-y-3">
        {mockTeam.map((m) => (
          <div key={m.name} className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">
                {getInitials(m.name)}
              </div>
              <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${statusDot[m.status]}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-700 truncate">{m.name}</p>
              <p className="text-xs text-slate-400">{m.role}</p>
            </div>
            <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${
              m.status === 'present' ? 'bg-emerald-50 text-emerald-600' :
              m.status === 'wfh'     ? 'bg-cyan-50 text-cyan-600' :
              m.status === 'leave'   ? 'bg-orange-50 text-orange-600' :
                                       'bg-red-50 text-red-600'
            }`}>{m.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

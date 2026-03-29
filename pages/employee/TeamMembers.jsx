import TeamMembersWidget from '../../components/dashboard/TeamMembers';

export default function TeamMembers() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Team Members</h2>
        <p className="text-sm text-slate-500 mt-1">View your team's status and details</p>
      </div>
      <TeamMembersWidget />
    </div>
  );
}

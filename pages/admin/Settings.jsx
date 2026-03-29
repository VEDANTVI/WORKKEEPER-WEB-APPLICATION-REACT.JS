import { Settings as SettingsIcon, Globe, Bell, Lock, Palette, Database } from 'lucide-react';

const sections = [
  { icon: Globe,    title: 'Company Info',    desc: 'Company name, address, and details' },
  { icon: Bell,     title: 'Notifications',   desc: 'Email and push notification preferences' },
  { icon: Lock,     title: 'Security',        desc: 'Password policies, 2FA, and session settings' },
  { icon: Palette,  title: 'Appearance',      desc: 'Theme, branding, and display settings' },
  { icon: Database, title: 'Data Management', desc: 'Backups, imports, and exports' },
];

export default function Settings() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-xl font-bold text-slate-800">Settings</h2>
        <p className="text-sm text-slate-500 mt-1">Manage application settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                <Icon size={18} className="text-blue-500" />
              </div>
              <h4 className="text-sm font-semibold text-slate-700">{s.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

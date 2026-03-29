import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

const config = {
  info:    { icon: Info,           bg: 'bg-blue-50',    border: 'border-blue-200', text: 'text-blue-700',   iconColor: 'text-blue-500' },
  success: { icon: CheckCircle2,   bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', iconColor: 'text-emerald-500' },
  warning: { icon: AlertTriangle,  bg: 'bg-amber-50',   border: 'border-amber-200', text: 'text-amber-700',  iconColor: 'text-amber-500' },
  error:   { icon: AlertCircle,    bg: 'bg-red-50',     border: 'border-red-200', text: 'text-red-700',    iconColor: 'text-red-500' },
};

export default function AlertBox({ type = 'info', message, dismissible = true }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  const c = config[type];
  const Icon = c.icon;

  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-xl border ${c.bg} ${c.border} ${c.text} animate-fade-in`}>
      <Icon size={18} className={`mt-0.5 shrink-0 ${c.iconColor}`} />
      <p className="flex-1 text-sm">{message}</p>
      {dismissible && (
        <button onClick={() => setVisible(false)} className="p-0.5 rounded hover:bg-white/40 transition">
          <X size={14} />
        </button>
      )}
    </div>
  );
}

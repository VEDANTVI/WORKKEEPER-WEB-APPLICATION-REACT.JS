import { classNames } from '../../utils/helpers';

const variants = {
  primary:   'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
  secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-700',
  success:   'bg-emerald-600 hover:bg-emerald-700 text-white',
  danger:    'bg-red-500 hover:bg-red-600 text-white',
  ghost:     'bg-transparent hover:bg-slate-100 text-slate-600',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

export default function Button({ children, variant = 'primary', size = 'md', className, ...props }) {
  return (
    <button
      className={classNames(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

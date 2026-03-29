import { CalendarCheck2, CalendarMinus2, CalendarX2, Clock3 } from 'lucide-react';
import { attendanceReportData } from '../../data/employeeDashboardData';
import { classNames } from '../../utils/helpers';

const statusConfig = {
  Present: {
    badge: 'bg-emerald-50 text-emerald-700',
    dot: 'bg-emerald-500',
    card: 'border-emerald-100 bg-emerald-50/70',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  Absent: {
    badge: 'bg-red-50 text-red-700',
    dot: 'bg-red-500',
    card: 'border-red-100 bg-red-50/70',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  Leave: {
    badge: 'bg-amber-50 text-amber-700',
    dot: 'bg-amber-500',
    card: 'border-amber-100 bg-amber-50/70',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
};

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat('en-IN', options).format(date);
}

export default function AttendanceReport({
  records = attendanceReportData,
  title = 'Attendance Report',
  subtitle = 'Review your attendance history and monthly summary.',
  maxTableHeight = 'max-h-[360px]',
}) {
  const normalizedRecords = [...records]
    .map((record) => ({
      ...record,
      dateObject: parseLocalDate(record.date),
    }))
    .sort((a, b) => b.dateObject - a.dateObject);

  const summary = normalizedRecords.reduce(
    (totals, record) => {
      totals[record.status] += 1;
      return totals;
    },
    { Present: 0, Absent: 0, Leave: 0 }
  );

  const attendanceRate = normalizedRecords.length
    ? Math.round((summary.Present / normalizedRecords.length) * 100)
    : 0;

  const periodLabel =
    normalizedRecords.length > 0
      ? formatDate(normalizedRecords[0].dateObject, { month: 'long', year: 'numeric' })
      : 'No records';

  const summaryCards = [
    {
      key: 'Present',
      label: 'Total Present',
      value: summary.Present,
      icon: CalendarCheck2,
    },
    {
      key: 'Absent',
      label: 'Total Absent',
      value: summary.Absent,
      icon: CalendarX2,
    },
    {
      key: 'Leave',
      label: 'Total Leaves',
      value: summary.Leave,
      icon: CalendarMinus2,
    },
  ];

  return (
    <section className="card p-5">
      <div className="flex flex-col gap-4 border-b border-slate-100 pb-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-medium">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-slate-600">
            <Clock3 size={14} />
            {periodLabel}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-700">
            Attendance rate: {attendanceRate}%
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          const tone = statusConfig[card.key];

          return (
            <div key={card.key} className={classNames('rounded-2xl border p-4', tone.card)}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{card.label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-800">{card.value}</p>
                </div>
                <div className={classNames('rounded-xl p-2.5', tone.iconBg)}>
                  <Icon size={18} className={tone.iconColor} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
        <div className="table-header">
          <h3>Attendance History</h3>
          <span>{normalizedRecords.length} records</span>
        </div>

        <div className={classNames('overflow-auto', maxTableHeight)}>
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-slate-50">
              <tr className="text-left">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Date</th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {normalizedRecords.map((record) => {
                const tone = statusConfig[record.status];

                return (
                  <tr key={record.id} className="hover:bg-slate-50/80">
                    <td className="px-5 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-700">
                          {formatDate(record.dateObject, { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="text-xs text-slate-400">
                          {formatDate(record.dateObject, { weekday: 'long' })}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={classNames(
                          'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold',
                          tone.badge
                        )}
                      >
                        <span className={classNames('h-2 w-2 rounded-full', tone.dot)} />
                        {record.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

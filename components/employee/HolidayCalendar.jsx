import { useMemo, useState } from 'react';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  List,
  Sparkles,
} from 'lucide-react';
import { holidayCalendarData } from '../../data/employeeDashboardData';
import { classNames } from '../../utils/helpers';

const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat('en-IN', options).format(date);
}

function createCalendarDays(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const emptyDays = (firstDayOfMonth.getDay() + 6) % 7;

  return [
    ...Array.from({ length: emptyDays }, (_, index) => ({ key: `empty-${index}`, isEmpty: true })),
    ...Array.from({ length: daysInMonth }, (_, index) => ({
      key: `day-${index + 1}`,
      dayNumber: index + 1,
      isEmpty: false,
    })),
  ];
}

export default function HolidayCalendar({
  holidays = holidayCalendarData,
  title = 'Holiday Calendar',
  subtitle = 'Track upcoming company holidays in calendar or list view.',
}) {
  const normalizedHolidays = useMemo(
    () =>
      holidays
        .map((holiday) => {
          const date = parseLocalDate(holiday.date);
          return {
            ...holiday,
            dateObject: date,
            monthKey: `${date.getFullYear()}-${date.getMonth()}`,
            dayNumber: date.getDate(),
          };
        })
        .sort((a, b) => a.dateObject - b.dateObject),
    [holidays]
  );

  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const monthOptions = useMemo(
    () =>
      Array.from(
        new Map(
          normalizedHolidays.map((holiday) => [
            holiday.monthKey,
            {
              key: holiday.monthKey,
              year: holiday.dateObject.getFullYear(),
              month: holiday.dateObject.getMonth(),
              label: formatDate(holiday.dateObject, { month: 'long', year: 'numeric' }),
            },
          ])
        ).values()
      ),
    [normalizedHolidays]
  );

  const nextHoliday = useMemo(
    () => normalizedHolidays.find((holiday) => holiday.dateObject >= today) ?? normalizedHolidays[0],
    [normalizedHolidays, today]
  );

  const initialMonthKey = nextHoliday?.monthKey ?? monthOptions[0]?.key ?? '';
  const [viewMode, setViewMode] = useState('calendar');
  const [selectedMonthKey, setSelectedMonthKey] = useState(initialMonthKey);
  const safeSelectedMonthKey = monthOptions.some((option) => option.key === selectedMonthKey)
    ? selectedMonthKey
    : initialMonthKey;
  const selectedMonth = monthOptions.find((option) => option.key === safeSelectedMonthKey) ?? monthOptions[0];
  const selectedMonthHolidays = normalizedHolidays.filter((holiday) => holiday.monthKey === selectedMonth?.key);
  const holidayByDay = Object.fromEntries(selectedMonthHolidays.map((holiday) => [holiday.dayNumber, holiday]));
  const calendarDays = selectedMonth ? createCalendarDays(selectedMonth.year, selectedMonth.month) : [];
  const currentMonthIndex = monthOptions.findIndex((option) => option.key === selectedMonth?.key);

  return (
    <section className="card p-5">
      <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
            <p className="text-sm text-slate-500">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-700">
              <CalendarDays size={14} />
              {normalizedHolidays.length} holidays this year
            </span>
            {nextHoliday && (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                <Sparkles size={14} />
                Next: {nextHoliday.name} on {formatDate(nextHoliday.dateObject, { day: 'numeric', month: 'short' })}
              </span>
            )}
          </div>
        </div>

        <div className="inline-flex w-full rounded-xl bg-slate-100 p-1 sm:w-auto">
          <button
            type="button"
            onClick={() => setViewMode('calendar')}
            className={classNames(
              'flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:flex-none',
              viewMode === 'calendar' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
            )}
          >
            <CalendarDays size={16} />
            Calendar
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={classNames(
              'flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:flex-none',
              viewMode === 'list' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
            )}
          >
            <List size={16} />
            List
          </button>
        </div>
      </div>

      {viewMode === 'calendar' ? (
        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.9fr)]">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Calendar view</p>
                <h4 className="text-base font-semibold text-slate-800">{selectedMonth?.label}</h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMonthKey(monthOptions[currentMonthIndex - 1]?.key ?? selectedMonthKey)}
                  disabled={currentMonthIndex <= 0}
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMonthKey(monthOptions[currentMonthIndex + 1]?.key ?? selectedMonthKey)}
                  disabled={currentMonthIndex === -1 || currentMonthIndex >= monthOptions.length - 1}
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 transition disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-400">
              {weekdayLabels.map((label) => (
                <div key={label} className="py-2">
                  {label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day) => {
                if (day.isEmpty) {
                  return <div key={day.key} className="min-h-24 rounded-2xl border border-transparent" />;
                }

                const holiday = holidayByDay[day.dayNumber];
                const isWeekend = [0, 6].includes(new Date(selectedMonth.year, selectedMonth.month, day.dayNumber).getDay());

                return (
                  <div
                    key={day.key}
                    className={classNames(
                      'min-h-24 rounded-2xl border p-3 text-left transition-colors',
                      holiday
                        ? 'border-emerald-200 bg-emerald-50 shadow-sm'
                        : isWeekend
                          ? 'border-slate-200 bg-white/80'
                          : 'border-slate-100 bg-white'
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-700">{day.dayNumber}</span>
                      {holiday && <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />}
                    </div>
                    {holiday ? (
                      <div className="mt-3 space-y-1">
                        <p className="text-sm font-semibold text-emerald-900">{holiday.name}</p>
                        <p className="line-clamp-2 text-xs text-emerald-800/80">{holiday.description}</p>
                      </div>
                    ) : (
                      <p className="mt-3 text-xs text-slate-400">{isWeekend ? 'Weekend' : 'Working day'}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Month highlights</p>
              <h4 className="mt-1 text-base font-semibold text-slate-800">
                {selectedMonthHolidays.length > 0
                  ? `${selectedMonthHolidays.length} holiday${selectedMonthHolidays.length > 1 ? 's' : ''} in ${selectedMonth?.label}`
                  : `No holidays in ${selectedMonth?.label}`}
              </h4>
            </div>

            <div className="space-y-3">
              {selectedMonthHolidays.map((holiday) => (
                <article
                  key={holiday.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{holiday.name}</p>
                      <p className="text-xs text-slate-500">
                        {formatDate(holiday.dateObject, {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                        })}
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Holiday
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{holiday.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Date</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Holiday</th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {normalizedHolidays.map((holiday) => (
                  <tr key={holiday.id} className="hover:bg-slate-50/80">
                    <td className="px-5 py-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-700">
                          {formatDate(holiday.dateObject, { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="text-xs text-slate-400">
                          {formatDate(holiday.dateObject, { weekday: 'long' })}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-700">{holiday.name}</td>
                    <td className="px-5 py-4 text-slate-500">{holiday.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

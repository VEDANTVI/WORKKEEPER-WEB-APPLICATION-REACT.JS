export default function QuickInfo({ items }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Quick Info</h3>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-1.5">
            <span className="text-sm text-slate-500">{item.label}</span>
            <span className="text-sm font-semibold text-slate-700">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import Button from '../common/Button';
import { Send } from 'lucide-react';

const leaveTypes = ['Sick Leave', 'Casual Leave', 'Personal Leave', 'Vacation', 'Maternity/Paternity', 'Compensatory Off'];

export default function LeaveForm({ onSubmit }) {
  const [form, setForm] = useState({ type: '', from: '', to: '', reason: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    setForm({ type: '', from: '', to: '', reason: '' });
  };

  return (
    <div className="card-padded">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">Apply for Leave</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label">Leave Type</label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="form-select"
            >
              <option value="">Select type</option>
              {leaveTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="form-label">From</label>
              <input
                type="date"
                value={form.from}
                onChange={(e) => setForm({ ...form, from: e.target.value })}
                className="form-input"
              />
            </div>
            <div>
              <label className="form-label">To</label>
              <input
                type="date"
                value={form.to}
                onChange={(e) => setForm({ ...form, to: e.target.value })}
                className="form-input"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="form-label">Reason</label>
          <textarea
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            rows={3}
            placeholder="Provide a brief reason..."
            className="form-textarea"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit"><Send size={14} /> Submit Request</Button>
        </div>
      </form>
    </div>
  );
}

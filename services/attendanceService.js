import { api } from './api';

export const attendanceService = {
  getAll:     () => api.get('/attendance'),
  getByDate:  (date) => api.get(`/attendance?date=${date}`),
  checkIn:    (data) => api.post('/attendance/check-in', data),
  checkOut:   (data) => api.post('/attendance/check-out', data),
};

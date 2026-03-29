import { api } from './api';

export const leaveService = {
  getAll:    () => api.get('/leaves'),
  apply:     (data) => api.post('/leaves', data),
  approve:   (id) => api.put(`/leaves/${id}/approve`),
  reject:    (id) => api.put(`/leaves/${id}/reject`),
  getBalance:() => api.get('/leaves/balance'),
};

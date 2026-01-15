import API from './api';

export const getAllEmployees = async () => {
  const response = await API.get('/employees');
  return response.data;
};

export const getEmployee = async (id) => {
  const response = await API.get(`/employees/${id}`);
  return response.data;
};

export const createEmployee = async (employeeData) => {
  const response = await API.post('/employees', employeeData);
  return response.data;
};

export const updateEmployee = async (id, employeeData) => {
  const response = await API.put(`/employees/${id}`, employeeData);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await API.delete(`/employees/${id}`);
  return response.data;
};

import axios from 'axios';

// Crea una instancia base de axios con la URL base
const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// Functions to interact with the API
export const getEmployees = () => {
  return api.get('/employees');
};

export const getEmployeeById = (id) => {
  return api.get(`/employees/${id}`);
};

export const calculateAnnualSalary = (id) => {
  return api.get(`/employees/${id}/annual-salary`);
};

export default api;
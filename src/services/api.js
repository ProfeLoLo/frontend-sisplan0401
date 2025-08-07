// frontend/src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Actividades POA
export const getActividades = () => API.get('/actividadespoa');
export const createActividad = (actividad) => API.post('/actividadespoa', actividad);
export const deleteActividad = (id) => API.delete(`/actividadespoa/${id}`);
export const updateActividad = (id, actividad) => API.put(`/actividadespoa/${id}`, actividad);

// TablaPOAcompleto
export const getTablaCompleta = () => API.get('/tablaPOAcompleto');

export default API;

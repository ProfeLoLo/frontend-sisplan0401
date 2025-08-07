// frontend/src/components/ListaActividades.jsx
import React, { useEffect, useState } from 'react';
import { getActividades, deleteActividad } from '../services/api';

function ListaActividades() {
  const [actividades, setActividades] = useState([]);
  const [error, setError] = useState(null);

  const cargarActividades = async () => {
    try {
      const { data } = await getActividades();
      setActividades(data);
    } catch (err) {
      setError('Error al obtener actividades');
    }
  };

  useEffect(() => {
    cargarActividades();
  }, []);

  const eliminar = async (id) => {
    if (confirm('¿Eliminar esta actividad?')) {
      await deleteActividad(id);
      cargarActividades();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📋 Actividades Registradas</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {actividades.length === 0 ? (
        <p>No hay actividades registradas.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#007acc', color: 'white' }}>
              <th style={thStyle}>Descripción</th>
              <th style={thStyle}>Unidad</th>
              <th style={thStyle}>Área</th>
              <th style={thStyle}>Participantes</th>
              <th style={thStyle}>Involucrados</th>
              <th style={thStyle}>Trimestre</th>
              <th style={thStyle}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {actividades.map(act => (
              <tr key={act.Id} style={{ backgroundColor: '#f9f9f9' }}>
                <td style={tdStyle}>{act.DescripcionActividad}</td>
                <td style={tdStyle}>{act.Unidad}</td>
                <td style={tdStyle}>{act.Area}</td>
                <td style={tdStyle}>{act.Participantes}</td>
                <td style={tdStyle}>{act.Involucrados}</td>
                <td style={tdStyle}>{act.Trimestre}</td>
                <td style={tdStyle}>
                  <button onClick={() => eliminar(act.Id)}>🗑️ Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  textAlign: 'left'
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ddd'
};

export default ListaActividades;


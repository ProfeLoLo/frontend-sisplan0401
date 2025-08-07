import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PresupuestoActividades() {
  const [presupuesto, setPresupuesto] = useState([]);
  const [actualizando, setActualizando] = useState(null);
  const [montoUsado, setMontoUsado] = useState(0);

  const obtenerPresupuesto = async () => {
    const { data } = await axios.get('/api/presupuesto');
    setPresupuesto(data);
  };

  const actualizarMonto = async (id) => {
    try {
      await axios.put(`/api/presupuesto/${id}`, { montoUsado });
      alert('Monto actualizado correctamente');
      setMontoUsado(0);
      setActualizando(null);
      obtenerPresupuesto();
    } catch (err) {
      alert(err.response?.data?.error || 'Error al actualizar');
    }
  };

  useEffect(() => {
    obtenerPresupuesto();
  }, []);

  return (
    <div>
      <h2>Presupuesto de Actividades</h2>
      <table>
        <thead>
          <tr>
            <th>Actividad</th>
            <th>Ejecutado</th>
            <th>Restante</th>
            <th>Actualizar</th>
          </tr>
        </thead>
        <tbody>
          {presupuesto.map(item => (
            <tr key={item.Id}>
              <td>{item.DescripcionActividad}</td>
              <td>{item.MontoEjecutado}</td>
              <td>{item.MontoRestante}</td>
              <td>
                {actualizando === item.Id ? (
                  <div>
                    <input
                      type="number"
                      value={montoUsado}
                      onChange={e => setMontoUsado(parseFloat(e.target.value))}
                    />
                    <button onClick={() => actualizarMonto(item.Id)}>Guardar</button>
                    <button onClick={() => setActualizando(null)}>Cancelar</button>
                  </div>
                ) : (
                  <button onClick={() => setActualizando(item.Id)}>Actualizar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PresupuestoActividades;

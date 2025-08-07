import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ConsultasActividades() {
  const [unidad, setUnidad] = useState('');
  const [trimestre, setTrimestre] = useState('');
  const [area, setArea] = useState('');
  const [resultado, setResultado] = useState(null);

  const consultarCantidad = async () => {
    const { data } = await axios.get('/api/consultas/cantidad', {
      params: { unidad, trimestre, area }
    });
    setResultado(data.cantidad);
  };

  return (
    <div>
      <h2>Consultas de Actividades</h2>
      <label>Unidad: <input value={unidad} onChange={e => setUnidad(e.target.value)} /></label>
      <label>Trimestre: <input value={trimestre} onChange={e => setTrimestre(e.target.value)} /></label>
      <label>Área: <input value={area} onChange={e => setArea(e.target.value)} /></label>
      <button onClick={consultarCantidad}>Consultar</button>

      {resultado !== null && <p>Total de actividades: {resultado}</p>}
    </div>
  );
}

export default ConsultasActividades;

import React, { useState } from 'react';
import { createActividad } from '../services/api';

function RegistroActividades() {
  const [form, setForm] = useState({
    descripcion: '',
    unidad: '',
    area: '',
    participantes: '',
    involucrados: '',
    trimestre: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createActividad(form);
      alert('✅ Actividad registrada correctamente');
      setForm({
        descripcion: '',
        unidad: '',
        area: '',
        participantes: '',
        involucrados: '',
        trimestre: ''
      });
    } catch (error) {
      const mensaje = error.response?.data?.error || '❌ Error al registrar la actividad';
      alert(mensaje);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>📝 Registrar Actividad</h2>
      <input
        name="descripcion"
        value={form.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        required
        style={inputStyle}
      />
      <input
        name="unidad"
        value={form.unidad}
        onChange={handleChange}
        placeholder="Unidad"
        required
        style={inputStyle}
      />
      <input
        name="area"
        value={form.area}
        onChange={handleChange}
        placeholder="Área"
        required
        style={inputStyle}
      />
      <input
        name="participantes"
        value={form.participantes}
        onChange={handleChange}
        placeholder="Participantes"
        required
        style={inputStyle}
      />
      <input
        name="involucrados"
        value={form.involucrados}
        onChange={handleChange}
        placeholder="Involucrados"
        required
        style={inputStyle}
      />
      <input
        name="trimestre"
        value={form.trimestre}
        onChange={handleChange}
        placeholder="Trimestre"
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Registrar</button>
    </form>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007acc',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default RegistroActividades;

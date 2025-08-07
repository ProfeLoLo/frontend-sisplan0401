// frontend/src/components/DashboardPOA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPOA() {
  return (
    <div>
      <h1>Gestión POA</h1>
      <nav>
        <Link to="/registro">Registro</Link>{" | "}
        <Link to="/presupuesto">Presupuesto</Link>{" | "}
        <Link to="/reportes">Reportes</Link>{" | "}
        <Link to="/consultas">Consultas</Link>
      </nav>
    </div>
  );
}

export default DashboardPOA;

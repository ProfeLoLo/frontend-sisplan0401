import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListaActividades from './components/ListaActividades';



// Importa los componentes de cada módulo
import DashboardPOA from './components/DashboardPOA';
import RegistroActividades from './components/RegistroActividades';
import PresupuestoActividades from './components/PresupuestoActividades';
import ReportesActividades from './components/ReportesActividades';
import ConsultasActividades from './components/ConsultasActividades';

// App principal con definición de rutas
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardPOA />} />
        <Route path="/registro" element={<RegistroActividades />} />
        <Route path="/presupuesto" element={<PresupuestoActividades />} />
        <Route path="/reportes" element={<ReportesActividades />} />
        <Route path="/consultas" element={<ConsultasActividades />} />
        <Route path="/actividades" element={<ListaActividades />} />
        {/* Ruta por defecto si no se encuentra */}
        <Route path="*" element={<h2>Ruta no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;

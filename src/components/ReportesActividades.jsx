import React from 'react';
import axios from 'axios';

function ReportesActividades() {
  const descargar = async (tipo) => {
    const url = `/api/reportes/${tipo}`;
    const response = await axios.get(url, { responseType: 'blob' });

    const blob = new Blob([response.data], { type: tipo === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = tipo === 'pdf' ? 'reporte.pdf' : 'reporte.docx';
    link.click();
  };

  return (
    <div>
      <h2>Reportes de Actividades</h2>
      <button onClick={() => descargar('pdf')}>Descargar PDF</button>
      <button onClick={() => descargar('word')}>Descargar Word</button>
    </div>
  );
}

export default ReportesActividades;

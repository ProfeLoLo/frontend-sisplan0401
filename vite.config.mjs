// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración principal de Vite para el sistema Sisplan0401WEB
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,      // Puerto local para el frontend
    open: true,      // Abre el navegador automáticamente
    proxy: {
      '/api': 'http://localhost:3000' // Redirige llamadas al backend local
    }
  },
  build: {
    outDir: 'dist',  // Carpeta de salida para producción
    sourcemap: true  // Útil para depurar errores en producción (opcional)
  },
  base: './'         // Usa rutas relativas para despliegue (Netlify, GitHub Pages)
})

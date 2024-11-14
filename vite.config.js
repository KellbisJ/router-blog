import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	// server: {
	// 	host: '0.0.0.0', // Escuchar en todas las direcciones IP
	// 	port: 5173, // Puedes especificar el puerto aquí si es necesario
	// },
});

// vite.config.js

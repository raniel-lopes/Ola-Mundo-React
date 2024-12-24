import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Configuração do Vite
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      json: resolve(__dirname, 'src/json'),
      Componentes: resolve(__dirname, 'src/Componentes'),
      '@assets': resolve(__dirname, 'src/assets'), // Alias para assets
    },
  },
});

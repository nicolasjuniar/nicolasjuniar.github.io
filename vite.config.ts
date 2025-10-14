import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ganti dengan nama repository GitHub kamu
// misal repo-nya: github.com/nicolasjuniar/nicolasjuniar.github.io
// maka `base` harus "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    outDir: "./wwwroot/app/",
    sourcemap: true,
    emptyOutDir: true,
/*    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].",
        assetFileNames: "[name].[ext]"
      }
    } */
  },
  server: {
     https: true,
     host: "localhost"
     /*
    port: 3000,
    https: true,
    hmr: {
       host: "cuidados.altogiro.net""
       host: "https://localhost",
       protocol: "wss"
    }*/
  }
 })





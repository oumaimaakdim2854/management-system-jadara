import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
//   server: {
//     proxy: {
//       '/api': 'http://localhost:5000'
//     }
//   }
<<<<<<< HEAD

    server: {
    port: 5175
  }
  
=======
>>>>>>> 30ba4a193dc8728e318b6118e90eb98597964c85
})


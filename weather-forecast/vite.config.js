import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({server: {
  watch: {
    usePolling: true,
  },
},
  plugins: [
    { enforce: 'pre'},
    react({ include: /\.(js|jsx|ts|tsx)$/ }),
  ],
})

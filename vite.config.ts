import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

function localCounterPlugin(): Plugin {
  return {
    name: 'local-counter-api',
    configureServer(server) {
      server.middlewares.use('/api/views', (req, res) => {
        const filePath = path.resolve(process.cwd(), 'src/data/views.json')
        try {
          if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify({ total: 1, lastVisit: new Date().toISOString() }, null, 2))
          }
          const fileData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
          if (req.method === 'POST') {
            fileData.total = (fileData.total || 0) + 1
            fileData.lastVisit = new Date().toISOString()
            fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2))
          }
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.end(JSON.stringify(fileData))
        } catch {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ total: 1 }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localCounterPlugin()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
})

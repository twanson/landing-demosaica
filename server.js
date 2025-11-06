const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Log todas las peticiones
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Servir archivos estáticos desde el directorio raíz
// IMPORTANTE: Usar path absoluto
app.use(express.static(path.join(__dirname), {
  index: 'index.html',
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    // Forzar MIME types correctos
    const ext = path.extname(filePath).toLowerCase();
    console.log(`Serving file: ${path.basename(filePath)} (${ext})`);

    if (ext === '.css') {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
    } else if (ext === '.js') {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    } else if (ext === '.webp') {
      res.setHeader('Content-Type', 'image/webp');
    } else if (ext === '.png') {
      res.setHeader('Content-Type', 'image/png');
    } else if (ext === '.jpg' || ext === '.jpeg') {
      res.setHeader('Content-Type', 'image/jpeg');
    }

    // No cache durante desarrollo
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
}));

// Fallback a index.html para rutas no encontradas (SPA)
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  console.log(`Fallback to index.html for: ${req.url}`);
  res.sendFile(indexPath);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`========================================`);
  console.log(`🎨 DEMOSAICA Landing Server`);
  console.log(`========================================`);
  console.log(`Port: ${PORT}`);
  console.log(`Directory: ${__dirname}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`========================================`);
});

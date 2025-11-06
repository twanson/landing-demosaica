const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Log de solicitudes para debug
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Servir archivos estáticos desde el directorio actual
app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.webp')) {
      res.setHeader('Content-Type', 'image/webp');
    } else if (filePath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    }
  }
}));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎨 DEMOSAICA Landing running on http://0.0.0.0:${PORT}`);
  console.log(`Serving from: ${__dirname}`);
});

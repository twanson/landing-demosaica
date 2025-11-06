# 🎨 Landing Page DEMOSAICA — Toolkit de Prescripción

Landing page profesional basada en el diseño exacto de **demosaica.com** para el toolkit de prescripción de baldosas hidráulicas artesanales.

---

## 📋 Descripción del Proyecto

Esta landing page permite a profesionales del sector (arquitectos, diseñadores de interiores, instaladores especializados) solicitar documentación técnica completa sobre las baldosas hidráulicas artesanales de DEMOSAICA.

**Reconstruida desde cero** con análisis exhaustivo de la web oficial de DEMOSAICA para capturar con exactitud:
- ✅ Paleta de colores oficial
- ✅ Tipografías exactas (Lato, Poppins, Josefin Sans)
- ✅ Tamaños y espaciados precisos
- ✅ Estructura de header y footer
- ✅ Estilo de botones y elementos interactivos
- ✅ Degradado oscuro en hero
- ✅ Sistema responsive idéntico

---

## 🎨 Especificaciones de Diseño

### Paleta de Colores (Exacta de DEMOSAICA)
```css
Primario:    #e2564d  (Rojo coral)
Secundario:  #de463b  (Rojo oscuro)
Negro:       #1a1a1a  (Textos principales)
Gris:        #5f656c  (Textos secundarios)
Gris claro:  #ededed  (Bordes y fondos)
Blanco:      #ffffff
Footer:      #111111
Footer sec:  #484848
```

### Tipografías
```
Body:       'Lato', 400, 18px, line-height 1.5em
Headings:   'Poppins', 600
  - H1:     48px (2.667rem), line-height 1.4em
  - H2:     32px (1.778rem), line-height 1.3em
  - H3:     24px (1.333rem), line-height 1.3em
  - H4:     20px
Menú:       'Josefin Sans', 400, 18px
Botones:    'Poppins', 600, 12px, uppercase, letter-spacing 2px
```

### Espaciados
```
Container máximo:     1240px
Padding container:    35px (desktop), 25px (tablet), 20px (mobile)
Padding secciones:    100px (desktop), 80px (tablet), 60px (mobile)
Header height:        70px
Border radius:        8px
```

---

## 📁 Estructura de Archivos

```
Landing DEMOSAICA/
├── index.html                          # Página principal
├── demosaica-styles.css                # CSS con sistema de DEMOSAICA
├── demosaica-script.js                 # Validación y funcionalidad
├── Demosaica_cropped-LOGO-PNG.png.webp # Logo oficial
├── README.md                           # Este archivo
└── [imágenes de productos]             # Assets visuales
```

---

## 🚀 Características Principales

### ✨ Header (Diseño exacto DEMOSAICA)
- Logo 70px con enlace a demosaica.com
- Navegación con Josefin Sans 18px
- Badge "Demo" en rojo coral
- Sticky positioning
- Border inferior #ededed

### 🖼️ Hero Section
- Background image con overlay
- **Degradado oscuro** (rgba negro 0.6-0.4-0.7)
- Contenido centrado con sombra de texto
- Botón CTA con estilos exactos
- Altura mínima 600px

### 📦 Secciones de Contenido
- **Paquete Técnico**: Grid de 3 columnas con números destacados
- **Galería de Productos**: Grid responsive con hover scale
- **Audiencia**: Fondo rojo coral con tags interactivos
- **Formulario**: Grid de 2 columnas con validación en tiempo real
- **Proceso de Entrega**: 4 pasos visuales
- **FAQ**: Acordeón con animación de rotación

### 🦶 Footer (5 columnas como DEMOSAICA)
- Background #111111
- 5 columnas de enlaces organizados
- Footer bottom con border-top
- Enlaces con hover color blanco
- Padding 100px superior

---

## 🔧 Funcionalidades Técnicas

### Validación de Formulario
```javascript
✓ Validación en tiempo real
✓ Mensajes de error personalizados
✓ Validación de formato email
✓ Campo obligatorio: checkbox privacidad
✓ Scroll automático a errores
✓ Prevención de pérdida de datos
```

### Acordeón FAQ
```javascript
✓ Abre/cierra con animación suave
✓ Cierra automáticamente otros items
✓ Icono rotatorio (+)
✓ Aria-expanded para accesibilidad
```

### Animaciones
```javascript
✓ Smooth scroll a anclas
✓ Fade-in elements on scroll
✓ Hover effects en galerías
✓ Transform effects en botones y tags
```

---

## 📱 Responsive Design

### Breakpoints (Igual que DEMOSAICA)
```css
Desktop:  > 921px
Tablet:   ≤ 921px
Mobile:   ≤ 544px
```

### Adaptaciones por Dispositivo

**Tablet (≤921px):**
- H1: 36px
- H2: 28px
- Ocultar navegación principal
- Form grid: 1 columna
- Footer: 2 columnas

**Mobile (≤544px):**
- H1: 30px
- H2: 24px
- H3: 20px
- Logo: 60px
- Hero: 500px min-height
- Package grid: 1 columna
- Footer: 1 columna
- Tags en columna vertical

---

## 📦 Contenido del Toolkit

1. **Geometría DWG**
   - Archivos CAD 2D (R2018)
   - Diseños organizados por colección
   - Patrones tradicionales y contemporáneos
   - Compatible AutoCAD y BricsCAD

2. **Especificaciones Técnicas**
   - PDF/A y Word .docx editable
   - Proceso de fabricación artesanal
   - Instalación, sellado, mantenimiento
   - Tolerancias dimensionales

3. **Certificación de Sostenibilidad**
   - Huella de carbono por m²
   - Materiales naturales (%)
   - Origen local de materias primas
   - Proceso artesanal bajo impacto

---

## 🎯 Público Objetivo

- **Estudios de Arquitectura**
- **Diseñadores de Interiores**
- **Instaladores Especializados**
- **Especificadores Técnicos**
- **Promotores e Inversores**

---

## 💻 Uso y Visualización

### Abrir la Demo
```bash
# Navegar a la carpeta
cd "Landing DEMOSAICA"

# Abrir en navegador (Mac)
open index.html

# O abrir en navegador (Windows)
start index.html
```

### Requisitos
- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ JavaScript habilitado
- ✅ Conexión a internet (para Google Fonts)

---

## 🛠️ Personalización

### Cambiar Colores
Editar las variables CSS en `demosaica-styles.css`:
```css
:root {
    --color-primary: #e2564d;
    --color-secondary: #de463b;
    /* etc... */
}
```

### Modificar Contenido
Editar directamente en `index.html`

### Ajustar Validaciones
Modificar funciones en `demosaica-script.js`

### Cambiar Imágenes
Reemplazar los archivos de imagen manteniendo los mismos nombres, o actualizar las rutas en el HTML.

---

## ⚙️ Detalles Técnicos

### Variables CSS
Utiliza CSS Custom Properties (variables) para fácil mantenimiento y consistencia.

### JavaScript Modular
Funciones separadas por responsabilidad:
- `initAccordion()` - Acordeón FAQ
- `initFormValidation()` - Validación de formulario
- `initSmoothScroll()` - Scroll suave
- `initScrollAnimations()` - Animaciones al scroll

### Accesibilidad
- ✓ Atributos ARIA
- ✓ Roles semánticos
- ✓ Focus visible
- ✓ Navegación por teclado
- ✓ Mensajes de error con role="alert"

---

## 📝 Notas Importantes

⚠️ **Esta es una demo sin backend funcional**
- No envía emails
- No descarga archivos reales
- Usa localStorage para simulación
- Console.log para debug

⚠️ **Imágenes placeholder**
- Las imágenes actuales son temporales
- Reemplazar con imágenes reales de la galería de DEMOSAICA
- Mantener aspect ratio y calidad

⚠️ **Producción**
- Integrar con backend/API
- Configurar envío de emails
- Sistema de descarga segura
- Analytics y tracking
- Optimizar y comprimir assets

---

## 🔄 Próximos Pasos para Producción

### Backend
1. [ ] API REST para procesar formularios
2. [ ] Sistema de email automático (confirmación)
3. [ ] Generación dinámica de archivos .zip
4. [ ] Base de datos para registros
5. [ ] Panel de administración

### Optimización
1. [ ] Comprimir imágenes (WebP)
2. [ ] Minificar CSS y JS
3. [ ] Lazy loading de imágenes
4. [ ] CDN para assets estáticos
5. [ ] Service Worker / PWA

### Analytics
1. [ ] Google Analytics 4
2. [ ] Hotjar o similar (heatmaps)
3. [ ] Tracking de conversiones
4. [ ] A/B testing

### SEO
1. [ ] Meta tags optimizados
2. [ ] Schema.org markup
3. [ ] Sitemap XML
4. [ ] Open Graph para redes sociales

---

## 📧 Contacto y Soporte

**DEMOSAICA**
Revestimientos Artesanales
Sevilla, España

- 🌐 Web: [demosaica.com](https://demosaica.com)
- 📧 Email: info@demosaica.com
- 📱 Redes Sociales: [Ver footer de la web]

---

## 📜 Licencia y Uso

**Uso interno exclusivo para DEMOSAICA**

Este proyecto es propiedad de DEMOSAICA y está destinado únicamente para uso interno de la empresa. No distribuir públicamente sin autorización.

---

## ✅ Checklist de Calidad

- [x] Diseño pixel-perfect respecto a demosaica.com
- [x] Colores exactos de la marca
- [x] Tipografías correctas (Lato, Poppins, Josefin Sans)
- [x] Header y Footer idénticos
- [x] Degradado oscuro en hero
- [x] Validación de formulario funcional
- [x] Acordeón FAQ operativo
- [x] Responsive en 3 breakpoints
- [x] Animaciones suaves
- [x] Logo oficial integrado
- [x] Enlaces a demosaica.com
- [x] Console logs informativos
- [x] Código limpio y comentado
- [x] README completo

---

**🎨 Desarrollado con atención al detalle para DEMOSAICA**
*Baldosas Hidráulicas Artesanales desde 1933*

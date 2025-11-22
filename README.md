# 🎄✨ Novedades A&D - Catálogo de Luces LED ✨🎄

Un catálogo vibrante y festivo para mostrar productos de luces LED con temas temáticos especiales.

## 🌟 Características Principales

### 🎨 Temas Festivos

- **🇲🇽 Fiesta Mexicana**: Colores verde, blanco y rojo con decoraciones festivas
- **🎃 Halloween**: Colores naranja, morado y negro con elementos espeluznantes
- **🎄 Navidad**: Colores rojo, verde y dorado con decoraciones navideñas

### ✨ Mejoras Visuales

- **Fondo animado** con gradientes que cambian según el tema
- **Luces decorativas animadas** en la parte superior
- **Tarjetas con efectos de brillo** y hover animations
- **Elementos flotantes** temáticos para cada ocasión
- **Animaciones suaves** y transiciones fluidas

### 🎯 Funcionalidades

- **Selector de temas** interactivo en la parte superior
- **Tarjetas de productos** con efectos visuales mejorados
- **Precios destacados** con animaciones de brillo
- **Enlaces de compra** a Shein y MercadoLibre
- **Diseño responsive** para móviles y tablets

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio del proyecto
cd novedades_ad

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

### 📱 Acceso

Una vez ejecutado, abre tu navegador en `http://localhost:5173` (o el puerto que indique la terminal).

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Herramienta de build y desarrollo
- **CSS3** - Estilos y animaciones avanzadas
- **JavaScript ES6+** - Lógica de la aplicación

## 📦 Estructura del Proyecto

```
novedades_ad/
├── src/
│   ├── assets/          # Imágenes y recursos
│   │   ├── products/    # Imágenes de productos
│   │   ├── logo.png
│   │   ├── shein.png
│   │   └── mercado.jpg
│   ├── components/      # Componentes React
│   │   ├── ProductCard.jsx
│   │   └── BuyButton.jsx
│   ├── App.jsx          # Componente principal
│   ├── data.js          # Datos de productos
│   ├── main.jsx         # Punto de entrada
│   └── styles.css       # Estilos principales
├── package.json
└── README.md
```

## 🎨 Personalización de Temas

### Agregar Nuevo Tema

Para agregar un nuevo tema, edita el objeto `themes` en `src/App.jsx`:

```javascript
const themes = {
  // Temas existentes...
  nuevoTema: {
    name: "Mi Tema",
    icon: "🎊",
    colors: ["#color1", "#color2", "#color3"],
  },
};
```

### Personalizar Colores

Los colores se definen usando variables CSS en `src/styles.css`:

```css
.theme-nuevoTema {
  --primary: #color1;
  --secondary: #color2;
  --accent: #color3;
  --bg-start: #gradientStart;
  --bg-end: #gradientEnd;
}
```

## 📊 Productos

El catálogo incluye diversos tipos de luces LED:

- Series LED básicas (50-100 focos)
- Series LED multicolor con control remoto
- Cortinas LED para efectos especiales
- Series LED inteligentes con WiFi
- Series LED solares
- Series LED profesionales para uso comercial

## 🔧 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🎯 Próximas Mejoras

- [ ] Agregar más temas festivos (Día de los Muertos, Año Nuevo, etc.)
- [ ] Implementar filtros por precio y características
- [ ] Añadir carrito de compras
- [ ] Integración con APIs de las tiendas
- [ ] Modo oscuro/claro
- [ ] Efectos de sonido temáticos

## 👨‍💻 Autor

**Andrew Gonzalez**  
Catálogo creado para Novedades A&D 💖

## 📄 Licencia

ISC License - Uso libre para fines comerciales y personales.

---

¡Gracias por usar nuestro catálogo de luces LED! ✨🎉

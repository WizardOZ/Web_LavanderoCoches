# Lavadero Humberto e Hijos

Sitio web profesional para el lavadero de coches **Humberto e Hijos**, ubicado en el Polígono Industrial de Canet d'en Berenguer.

## Demo

Puedes ver la web en vivo aquí: [lavadero-humberto.netlify.app](https://lavadero-humberto.netlify.app)

## Características

- **Diseño moderno y responsive** - Se adapta a móvil, tablet y escritorio
- **Formulario de reserva** - Los clientes pueden reservar directamente por WhatsApp
- **Mapa integrado** - Google Maps embebido para facilitar la ubicación en el polígono industrial
- **Precios claros** - Tabla de tarifas transparente
- **Animaciones suaves** - Scroll reveal y efectos hover
- **SEO optimizado** - Meta tags, Open Graph y estructura semántica
- **Accesibilidad** - ARIA labels, contraste de colores y navegación por teclado

## Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (sin dependencias)
- Font Awesome para iconos
- Google Fonts (Montserrat + Open Sans)

## Estructura del proyecto

```
├── index.html          # Página principal
├── css/
│   └── styles.css      # Hoja de estilos principal
├── js/
│   └── main.js         # Scripts de interactividad
├── images/             # Carpeta para imágenes locales
└── assets/             # Recursos adicionales
```

## Cómo desplegar en Netlify

### Opción 1: Despliegue desde GitHub (recomendado)

1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos de este proyecto
3. Ve a [Netlify](https://www.netlify.com/) e inicia sesión
4. Haz clic en **"Add new site"** → **"Import an existing project"**
5. Selecciona GitHub y elige tu repositorio
6. Netlify detectará automáticamente la configuración
7. Haz clic en **"Deploy site"**

### Opción 2: Despliegue manual (drag & drop)

1. Comprime todos los archivos en un `.zip`
2. Ve a [Netlify](https://www.netlify.com/) e inicia sesión
3. En el dashboard, arrastra el `.zip` a la zona de drop
4. Netlify desplegará automáticamente tu sitio

### Opción 3: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Desplegar
netlify deploy --prod --dir .
```

## Configuración del formulario WhatsApp

El formulario de reserva envía un mensaje preformateado a WhatsApp. Para cambiar el número de teléfono, edita el archivo `js/main.js` y modifica la línea:

```javascript
const whatsappUrl = 'https://wa.me/34659772833?text=' + encodeURIComponent(mensaje);
```

Reemplaza `34659772833` por el número deseado (formato internacional sin el `+`).

## Personalización

### Colores
Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary: #FF6B00;        /* Naranja principal */
    --secondary: #0A1628;      /* Azul oscuro */
    --accent: #00B4D8;         /* Azul claro */
}
```

### Imágenes
Reemplaza la imagen del hero en `index.html`:

```html
<img src="URL_DE_TU_IMAGEN" alt="Descripción" class="hero-image">
```

Para usar imágenes locales, colócalas en la carpeta `images/` y referéncialas así:

```html
<img src="images/tu-imagen.jpg" alt="Descripción">
```

## Licencia

Este proyecto es propiedad de **Lavadero Humberto e Hijos**. Todos los derechos reservados.

---

Desarrollado con ❤️ para el mejor lavadero de Canet d'en Berenguer.

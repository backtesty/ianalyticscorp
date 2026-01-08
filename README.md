# iAnalytics - AI Agent Platform

Una plataforma moderna de agentes de IA construida con React, TypeScript y Vite, integrada con Google Gemini AI.

## 🚀 Características

- **Interfaz Moderna**: Diseño limpio y responsive construido con React 19
- **Integración con IA**: Powered by Google Gemini AI para capacidades avanzadas de agentes
- **TypeScript**: Código type-safe para mejor mantenibilidad
- **Vite**: Build tool ultrarrápido para desarrollo eficiente
- **Componentes Modulares**: Arquitectura de componentes bien organizada

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Una API key de Google Gemini AI

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd ianalyticscorp
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
Crea un archivo `.env` en la raíz del proyecto y agrega tu API key de Gemini:
```env
VITE_GEMINI_API_KEY=tu_api_key_aqui
```

## 🚀 Uso

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build para Producción
```bash
npm run build
```

### Preview de Producción
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
ianalyticscorp/
├── components/          # Componentes React
│   ├── Demo.tsx        # Componente de demostración
│   ├── Footer.tsx      # Footer del sitio
│   ├── Header.tsx      # Header del sitio
│   ├── Hero.tsx        # Sección hero
│   ├── Methodology.tsx # Metodología
│   ├── Services.tsx    # Servicios
│   ├── TrustedBy.tsx   # Sección de confianza
│   └── Workflow.tsx    # Flujo de trabajo
├── services/           # Servicios
│   └── geminiService.ts # Integración con Gemini AI
├── App.tsx             # Componente principal
├── index.tsx           # Punto de entrada
├── constants.ts        # Constantes de la aplicación
├── types.ts            # Definiciones de tipos TypeScript
└── vite.config.ts      # Configuración de Vite
```

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca UI
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Build tool y dev server
- **Google Gemini AI** - Plataforma de IA generativa
- **Lucide React** - Iconos modernos

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Preview de la build de producción

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## 📄 Licencia

Este proyecto es privado y propietario.

## 📧 Contacto

Para más información sobre iAnalytics, visita nuestro sitio web o contacta al equipo de desarrollo.

---

Desarrollado con ❤️ por el equipo de iAnalytics
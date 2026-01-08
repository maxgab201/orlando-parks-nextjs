# 🎪 Guía Mágica de Orlando - Next.js

Tu guía completa de los parques temáticos de Disney y Universal en Orlando. Una aplicación web moderna, responsiva y optimizada para móvil.

## ✨ Características

- **Información Completa de Parques**: Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom, Universal Studios, Islands of Adventure
- **Atracciones Detalladas**: Descripción, duración, tiempos de espera, requisitos de altura, películas relacionadas
- **Itinerarios Sugeridos**: Guías paso a paso para aprovechar al máximo tu día en cada parque
- **Barra de Búsqueda Funcional**: Busca atracciones en tiempo real
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Suaves**: Transiciones y efectos cinematográficos
- **Interfaz Intuitiva**: Navegación clara y fácil de usar

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Selecciona tu repositorio de GitHub: `orlando-parks-nextjs`
4. Vercel detectará automáticamente que es un proyecto Next.js
5. Haz clic en "Deploy"
6. ¡Tu aplicación estará en vivo en unos minutos!

### Opción 2: Despliegue Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📱 Desarrollo Local

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/maxgab201/orlando-parks-nextjs.git
cd orlando-parks-nextjs

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
orlando-parks-nextjs/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales
│   ├── error.tsx           # Página de error
│   ├── not-found.tsx       # Página 404
│   └── park/
│       └── [id]/
│           └── page.tsx    # Página de detalle del parque
├── components/
│   ├── Header.tsx          # Componente de encabezado
│   └── SearchBar.tsx       # Componente de búsqueda
├── data/
│   └── parks.ts            # Datos de parques y atracciones
├── public/
│   └── images/             # Imágenes de parques
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Tecnologías Utilizadas

- **Next.js 15**: Framework React moderno
- **React 19**: Librería de UI
- **Tailwind CSS 4**: Estilos utilitarios
- **TypeScript**: Tipado estático
- **Lucide React**: Iconos SVG
- **Vercel**: Hosting y despliegue

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar servidor de producción
npm start

# Linting
npm run lint
```

## 🌐 URL en Vivo

Una vez desplegado en Vercel, tu aplicación estará disponible en:
```
https://orlando-parks-nextjs.vercel.app
```

## 📚 Información de Parques

### Disney World
- **Magic Kingdom**: El parque más icónico con el Castillo de Cenicienta
- **EPCOT**: Explora el futuro y culturas del mundo
- **Hollywood Studios**: Vive la magia del cine
- **Animal Kingdom**: Aventuras en la naturaleza

### Universal Orlando
- **Universal Studios**: Atracciones basadas en películas famosas
- **Islands of Adventure**: Seis islas temáticas con aventuras épicas

## 🔍 Búsqueda de Atracciones

Usa la barra de búsqueda para encontrar:
- Nombres de atracciones
- Tipos de atracciones (montañas rusas, simuladores, etc.)
- Parques específicos

## 💡 Próximas Mejoras

- [ ] Integración con horarios en vivo de Disney/Universal
- [ ] Sistema de favoritos con localStorage
- [ ] Filtros avanzados por tipo de atracción
- [ ] Comparador de parques
- [ ] Modo oscuro
- [ ] Múltiples idiomas

## 📄 Licencia

MIT

## 👨‍💻 Autor

Creado con ❤️ para los amantes de los parques temáticos

---

**¿Preguntas o sugerencias?** Abre un issue en GitHub o contacta directamente.

¡Que disfrutes tu aventura en Orlando! 🎢✨

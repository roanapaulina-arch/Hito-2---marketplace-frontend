# 🛒 MarketPlace - Hito 2: Desarrollo Frontend

Aplicación cliente desarrollada con React para la plataforma **MarketPlace**, correspondiente al segundo hito de evaluación. La aplicación cuenta con enrutamiento de vistas, gestión de estado global y componentes dinámicos con estilos responsivos de Bootstrap.

## 🚀 Características principales

- **Navegación por Rutas**: Implementación de `React Router DOM` con rutas públicas y privadas protegidas.
- **Estado Global (Context API)**: Gestión del estado de autenticación (Login/Logout) compartido entre toda la aplicación.
- **Redirección Programática**: Control de flujo de usuario con el hook `useNavigate` al autenticarse o cerrar sesión.
- **Componentes Reutilizables**: Tarjetas de productos (`ProductCard`) con renderización dinámica mediante paso de `props` y funciones JS (`.map`).
- **Diseño Responsivo**: Implementación de Bootstrap para la interfaz gráfica visual.

## 🛠️ Tecnologías utilizadas

- **React.js**
- **React Router DOM**
- **Context API**
- **Bootstrap / React Bootstrap**
- **JavaScript (ES6+)** / HTML5 / CSS3

## 📋 Vistas de la aplicación

- `/`: **Home** (Página principal y bienvenida)
- `/login`: **Login** (Formulario de inicio de sesión con validación)
- `/register`: **Registro** (Formulario de registro de nuevos usuarios)
- `/profile`: **Perfil de Usuario** (Vista protegida con el listado dinámico de publicaciones y opción de cerrar sesión)

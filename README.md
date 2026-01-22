# 📝 Fullstack To-Do App (Enterprise Standards)

Este proyecto es una aplicación de gestión de tareas (To-Do List) construida con un enfoque en **ingeniería de software**, **calidad de código (QA)** y **persistencia de datos**.

El objetivo principal es demostrar la integración de un flujo de trabajo profesional, utilizando herramientas de automatización y una arquitectura escalable.

---

## 🏗️ Arquitectura del Proyecto

El proyecto utiliza una estructura de **Monorepo** para separar claramente las responsabilidades:

- **/backend**: API REST construida con Node.js y Express, conectada a una base de datos PostgreSQL/MySQL.
- **/frontend**: Interfaz de usuario moderna con React, gestionada con Zustand para el estado global y estilizada con SASS.
- **/docs**: Documentación técnica y diagramas de arquitectura.

---

## 🛡️ Estándares de Calidad (QA)

Para garantizar la integridad del código, el repositorio cuenta con:

- **Linting & Formatting**: Configuración de **ESLint (v9)** y **Prettier** para mantener un estilo de código consistente y libre de errores sintácticos.
- **Git Hooks (Husky)**: Automatización de tareas que impide realizar commits o pushes si el código no cumple con las reglas de estilo o si los tests fallan.
- **Testing Strategy**:
  - **Backend**: Pruebas de integración con Jest y Supertest.
  - **Frontend**: Pruebas de componentes con React Testing Library y Vitest.

---

## 🛠️ Stack Tecnológico

| Capa               | Tecnología                  |
| :----------------- | :-------------------------- |
| **Frontend**       | React, Zustand, SASS, Vite  |
| **Backend**        | Node.js, Express            |
| **Base de Datos**  | PostgreSQL / MySQL          |
| **Automatización** | Husky, Lint-staged          |
| **Calidad**        | ESLint, Prettier, Jest, RTL |

---

## 🚀 Instalación y Configuración

1.  **Clonar el repositorio:**

    ```bash
    git clone git@github.com:FerCode-Dev/todo-fullstack.git
    cd todo-fullstack
    ```

2.  **Instalar dependencias de la raíz (Herramientas de calidad):**

    ```bash
    npm install
    ```

3.  **Configuración de entorno:**
    - Crea un archivo `.env` en la carpeta `/backend` (ver `.env.example`).

---

## 📋 Roadmap del Proyecto

- [x] **Fase 0**: Configuración de Boilerplate, Git, ESLint, Prettier y Husky.
- [ ] **Fase 1**: Diseño de Base de Datos y API REST básica.
- [ ] **Fase 2**: Implementación de Testing de Integración en el Backend.
- [ ] **Fase 3**: Desarrollo de UI en React y Gestión de Estado.
- [ ] **Fase 4**: Testing de UI y Despliegue.

---

Creado con ❤️ por [Fernanda Rodriguez]

# 🥐 Panadería Digital · Guía Backend FastAPI

Aplicación web estática con la guía técnica completa del **backend** del sistema Panadería Digital.
Construida con HTML, CSS y JavaScript puro — sin frameworks, sin dependencias externas.

## Stack documentado

| Capa | Tecnología |
|---|---|
| API REST | FastAPI 0.111 + Uvicorn |
| ORM | SQLAlchemy 2.0 |
| Base de datos | PostgreSQL 15 |
| Autenticación | JWT (python-jose) + bcrypt (passlib) |
| Tiempo real | WebSockets nativos de FastAPI |
| Validación | Pydantic v2 |

## Contenido (11 pasos)

1. Arquitectura y estructura del proyecto
2. Entorno de desarrollo — requirements.txt y venv
3. Modelo de datos — DDL PostgreSQL completo
4. Configuración FastAPI · JWT · SQLAlchemy · .env
5. Modelos ORM y Schemas Pydantic
6. Endpoints de Autenticación (login / registro)
7. Endpoints CRUD Productos (con subida de fotos)
8. Endpoints CRUD Clientes (RBAC por rol)
9. Endpoints Facturas Maestro-Detalle
10. WebSocket — Notificaciones en tiempo real
11. Arrancar el servidor y pruebas con Swagger UI

## Despliegue

### GitHub Pages

```bash
git init
git add .
git commit -m "feat: guia backend FastAPI Panaderia Digital"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/panaderia-backend.git
git push -u origin main
```

Settings → Pages → Branch: `main` → `/root` → Save

URL: `https://TU_USUARIO.github.io/panaderia-backend/`

### GitLab Pages

El archivo `.gitlab-ci.yml` ya está incluido. Solo hacer `git push`.

### Netlify

Arrastrar la carpeta al dashboard de netlify.com → URL inmediata.

## Uso local

```bash
# Opción 1: abrir directamente
start index.html       # Windows
open index.html        # macOS

# Opción 2: servidor local
python3 -m http.server 8080
# Abrir http://localhost:8080
```

---

© 2025 Ing. Luis Eladio Porras Camargo · SENA ADSO 228118 · CC BY-NC-ND 4.0

# Interbank Auth API

Servicio opcional de autenticación con Node.js y Express para emitir y validar tokens JWT.

El contrato OpenAPI está en `openapi/openapi.yaml` y se puede importar directamente en Swagger Editor.

## Estado

Scaffold inicial. Se implementará únicamente si se confirma el alcance opcional de seguridad.

## Variables de entorno

- `PORT`: puerto HTTP, por defecto `8082`.
- `JWT_SECRET`: secreto usado para firmar tokens; nunca debe versionarse.
- `JWT_EXPIRES_IN`: duración del token.

Usuario de demostración local: `demo` / `demo`. En producción debe reemplazarse por un proveedor de identidad y almacenamiento de usuarios reales.

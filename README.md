# Interbank Auth API

Servicio opcional de autenticación con Node.js y Express para emitir y validar tokens JWT.

## Estado

Scaffold inicial. Se implementará únicamente si se confirma el alcance opcional de seguridad.

## Variables de entorno

- `PORT`: puerto HTTP, por defecto `8082`.
- `JWT_SECRET`: secreto usado para firmar tokens; nunca debe versionarse.
- `JWT_EXPIRES_IN`: duración del token.

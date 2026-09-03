import express from 'express';
import { createAuthService } from './auth.js';

export function createApp(authService) {
  const app = express();
  app.use(express.json());
  app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', process.env.WEB_ORIGIN ?? 'http://localhost:3000');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (request.method === 'OPTIONS') return response.sendStatus(204);
    return next();
  });
  app.get('/health', (_request, response) => response.json({ status: 'ok' }));
  app.post('/v1/auth/login', (request, response) => {
    const { username, password } = request.body ?? {};
    const token = authService.authenticate(username, password);
    if (!token) return response.status(401).json({ error: 'invalid credentials' });
    return response.json({ accessToken: token, tokenType: 'Bearer' });
  });
  return app;
}

const port = Number(process.env.PORT ?? 8082);
if (process.env.NODE_ENV !== 'test') {
  const authService = createAuthService({ secret: process.env.JWT_SECRET ?? 'local-development-secret' });
  createApp(authService).listen(port, () => console.log(`Auth API listening on port ${port}`));
}

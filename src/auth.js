import jwt from 'jsonwebtoken';

export function createAuthService({ secret, expiresIn = '1h' }) {
  if (!secret) throw new Error('JWT_SECRET is required');
  return {
    authenticate(username, password) {
      if (username !== 'demo' || password !== 'demo') return null;
      return jwt.sign({ sub: username, role: 'user' }, secret, { expiresIn });
    },
    verify(token) {
      return jwt.verify(token, secret);
    },
  };
}

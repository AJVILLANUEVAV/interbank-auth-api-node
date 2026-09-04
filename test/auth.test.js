import test from 'node:test';
import assert from 'node:assert/strict';
import { createAuthService } from '../src/auth.js';

test('issues and verifies a JWT for demo credentials', () => {
  const service = createAuthService({ secret: 'test-secret' });
  const token = service.authenticate('demo', 'demo');
  assert.equal(service.verify(token).sub, 'demo');
});

test('rejects invalid credentials', () => {
  const service = createAuthService({ secret: 'test-secret' });
  assert.equal(service.authenticate('demo', 'wrong'), null);
});

test('uses a five-minute token lifetime by default', () => {
  const service = createAuthService({ secret: 'test-secret' });
  const token = service.authenticate('demo', 'demo');
  const claims = service.verify(token);
  assert.ok(claims.exp - claims.iat <= 5 * 60);
});

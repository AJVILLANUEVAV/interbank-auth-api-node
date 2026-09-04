# Render deployment

Configure these environment variables in Render:

```text
PORT=8082
JWT_SECRET=<same-long-secret-used-by-the-other-APIs>
JWT_EXPIRES_IN=5m
WEB_ORIGIN=https://interbank-matrix-qzaru4ygq-ali-vp.vercel.app
```

`WEB_ORIGIN` must match the Vercel origin exactly: use `https`, no trailing slash. Redeploy after changing it.

Login endpoint: `https://interbank-auth-api-node.onrender.com/v1/auth/login`

Demo credentials: `demo` / `demo`.

import express from 'express';
import cors from 'cors';
import './load-env-vars.js'
import router from './server/routes/routes.js';
import { generalErrorHandler, notFoundErrorHandler } from './server/middlewares/errors.js';

export const app = express();

// CORS for local 
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const port = process.env.PORT ?? 8080;

// Routes
app.use(router)
// Error handlers
app.use(notFoundErrorHandler);
app.use(generalErrorHandler);

app.listen(port, () => {
  console.log(`Listening in port: ${port}`);
});
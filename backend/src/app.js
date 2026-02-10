import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoute.js';

const app = express();

// Middlewares
app.use(cors()); // Permite que el frontend se conecte
app.use(express.json()); // Permite leer archivos JSON en las peticiones

// Rutas
app.use('/tasks', taskRoutes);

export default app;

import express from 'express';
import {
  getTasks,
  createTask,
  updateTaskStatus,
} from '../controllers/taskController.js';

const router = express.Router();

// Definición de Endpoints
//✅ Estas tienen sus funciones listas en el controlador
router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', updateTaskStatus);
//router.delete('/:id');

export default router;

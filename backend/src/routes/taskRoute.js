import express from 'express';
import {
  getTasks,
  createTask,
  updateTaskStatus,
} from '../controllers/taskController.js';

const router = express.Router();

// Definición de Endpoints
router.get('/', getTasks); // GET http://localhost:3000/api/tasks
router.post('/', createTask); // POST http://localhost:3000/api/tasks
router.patch('/:id', updateTaskStatus); // PATCH http://localhost:3000/api/tasks/1

export default router;

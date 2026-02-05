import pool from '../config/db.js';

const Task = {
  // Obtener todas las tareas
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM tasks');
    return rows;
  },

  // Crear una nueva tarea
  create: async (title, description) => {
    const [result] = await pool.query(
      'INSERT INTO tasks (title, description) VALUES (?, ?)',
      [title, description]
    );
    return result.insertId;
  },

  // Marcar como completada
  complete: async (id) => {
    await pool.query('UPDATE tasks SET is_completed = 1 WHERE id = ?', [id]);
  },
};

export default Task;

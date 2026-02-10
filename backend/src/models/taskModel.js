import pool from '../config/db.js';
// model es la representación y el esquema de tus datos
//el Modelo solo sabe leer y escribir en la base de datos,
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

  // Eliminar una tarea
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
    return result.affectedRows > 0; // Devuelve true si borró algo, false si el ID no existía
  },
};

export default Task;

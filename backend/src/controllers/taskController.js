import Task from '../models/taskModel.js';
//Exactamente. El Controlador es donde reside la lógica de negocio
//el Controlador decide qué, cuándo y bajo qué condiciones debe ocurrir algo.
//Gestionar la petición HTTP y la respuesta.

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks); // Enviamos las tareas al frontend en formato JSON
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al obtener las tareas', error: error.message });
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'El título es obligatorio' });
  }

  try {
    const taskId = await Task.create(title, description);
    res.status(201).json({
      id: taskId,
      title,
      description,
      message: 'Tarea creada con éxito',
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al crear la tarea', error: error.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.complete(id);
    res.json({ message: `Tarea ${id} marcada como completada` });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error al actualizar la tarea', error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    // 1. Llamamos al modelo y guardamos el resultado (true o false)
    const deleted = await Task.delete(id);
    // 2. Lógica de Negocio: ¿Existía la tarea?
    if (!deleted) {
      return res.status(404).json({ message: 'La tarea no existe' });
    }
    // 3. Si existía, respondemos éxito
    res.json({ message: `Tarea ${id} eliminada con éxito` });
  } catch (error) {
    // 4. Si algo falló (ej. la base de datos se desconectó)
    res
      .status(500)
      .json({ message: 'Error al eliminar la tarea', error: error.message });
  }
};

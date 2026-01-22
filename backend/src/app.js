import express from 'express';
import cors from 'cors';

//INICIALIZACIÓN: Creamos la instancia de la aplicación
const app = express();
//MIDDLEWARES: Los "Filtros de Proceso"
app.use(cors());
app.use(express.json());

//RUTAS
app.get('/', (req, res) => {
  res.send({ message: 'API To-Do funcionando correctamente 🚀' });
});

export default app;

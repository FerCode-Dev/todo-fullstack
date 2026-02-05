import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Creamos un "Pool" (piscina de conexiones) para que el servidor sea rápido
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'todo_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Verificación técnica de conexión
pool
  .getConnection()
  .then((connection) => {
    console.log('✅ Conexión a MySQL exitosa como un profesional');
    connection.release();
  })
  .catch((err) => {
    console.error('❌ Error de conexión detallado:');
    console.log(err); // Esto nos dirá si es "Password wrong", "Database not found", etc.
  });

export default pool;

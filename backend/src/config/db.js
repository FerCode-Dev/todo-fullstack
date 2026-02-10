//Este archivo es el "puente"de conexion  entre Node.js y MySQL.
//módulo de configuración de la base de datos.

import mysql from 'mysql2/promise';
//MYSQL2 :es una librería (o "driver") para permitir que Node.js
//se comunique con una base de datos MySQL.
import dotenv from 'dotenv';
//dotenv :lobreria para cargar variables de entorno desde un archivo .env.

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

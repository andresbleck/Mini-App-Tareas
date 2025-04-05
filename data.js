const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const { guardarEnBaseDeDatos } = require('./database'); // Importa la función para guardar tareas

app.use(cors());
app.use(express.json());
// Ruta POST para agregar una tarea
app.post('/agregar_tarea', (req, res) => {
  const { tarea } = req.body;
  // Verifica que la tarea no esté vacía
  if (!tarea || tarea.trim() === "") {
    return res.status(400).send("La tarea no puede estar vacía.");
  }

  const mensaje = guardarEnBaseDeDatos(tarea.trim());
  res.send(mensaje); // Guarda la tarea en la base de datos y devuelve el msj
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); 
  // Inicia el servidor en el puerto especificado
});

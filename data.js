const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const { guardarEnBaseDeDatos } = require('./database');

app.use(cors());
app.use(express.json());

app.post('/agregar_tarea', (req, res) => {
  const { tarea } = req.body;

  if (!tarea || tarea.trim() === "") {
    return res.status(400).send("La tarea no puede estar vacía.");
  }

  const mensaje = guardarEnBaseDeDatos(tarea.trim());
  res.send(mensaje);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

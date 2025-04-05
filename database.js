const listaDeTareas = [];

function guardarEnBaseDeDatos(tarea) {
  listaDeTareas.push(tarea);
  return `Tarea guardada: ${tarea}`;
}

module.exports = {
  guardarEnBaseDeDatos,
};
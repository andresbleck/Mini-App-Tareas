const listaDeTareas = []; // Array para simular la base de datos de tareas

//Funcion para Guardar una tarea
function guardarEnBaseDeDatos(tarea) {
  listaDeTareas.push(tarea);
  return `Tarea guardada: ${tarea}`;
}
//exporta la funcion
module.exports = {
  guardarEnBaseDeDatos,
};

// Objeto para almacenar la lista de tareas
var listaTareas = {
    tareas: [],
    agregarTarea: function (tarea) {
      this.tareas.push({ descripcion: tarea, completada: false });
    },
    marcarComoCompletada: function (indice) {
      if (indice >= 0 && indice < this.tareas.length) {
        this.tareas[indice].completada = true;
      }
    },
    mostrarTareas: function () {
      console.log("Lista de tareas:");
      this.tareas.forEach(function (tarea, indice) {
        var estado = tarea.completada ? "[✔]" : "[ ]";
        console.log(indice + 1 + ". " + estado + " " + tarea.descripcion);
      });
    }
  };
  
  // Agregar algunas tareas
  listaTareas.agregarTarea("Hacer ejercicio");
  listaTareas.agregarTarea("Estudiar JavaScript");
  
  // Marcar la primera tarea como completada
  listaTareas.marcarComoCompletada(0);
  
  // Mostrar la lista de tareas
  listaTareas.mostrarTareas();
  
  // Agregar tareas desde la consola
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('¿Agregar una nueva tarea? ', function(respuesta) {
    if (respuesta.toLowerCase() === 'si') {
      rl.question('Ingrese la descripción de la tarea: ', function(descripcion) {
        listaTareas.agregarTarea(descripcion);
        listaTareas.mostrarTareas();
        rl.close();
      });
    } else {
      rl.close();
    }
  });
  
// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
  }
  
  // Función para restar dos números
  function restar(num1, num2) {
    return num1 - num2;
  }
  
  // Función para multiplicar dos números
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  // Función para dividir dos números
  function dividir(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Error: No se puede dividir por cero.";
    }
  }
  
  // Función principal para realizar operaciones
  function calcular(operacion, num1, num2) {
    switch (operacion) {
      case "suma":
        return sumar(num1, num2);
      case "resta":
        return restar(num1, num2);
      case "multiplicacion":
        return multiplicar(num1, num2);
      case "division":
        return dividir(num1, num2);
      default:
        return "Operación no válida";
    }
  }
  
  // Ejemplo de uso
  const resultado = calcular("suma", 5, 3);
  console.log("Resultado: " + resultado);
  
// 2- La tarea consiste en generar una lista de 40 números aleatorios y
// determinar si cada uno de ellos es positivo o negativo. 
// Este proceso debe repetirse hasta que se detecte un 0 en la lista o
// hasta que se haya recorrido toda la lista.

// Generar una lista de 40 números aleatorios
let numeros = [];
for (let i = 0; i < 40; i++) {
  numeros.push(Math.floor(Math.random() * 201) - 100);
}
//Inicializamos las variables
let positivos = 0; let negativos = 0; let total = 0;
// Recorrer la lista y determinar si el número es positivo o negativo
for (let numero of numeros) {
  if (numero === 0) {
    console.log("Se detecto un 0");
    break;
  } else if (numero > 0) {
    positivos++;
  } else {
    negativos++;
  }
total++;
}
//Mostramos el resultado
console.log('La cantidad de números eljidos al azar fueron: ', (total));
console.log('Los números positivos son: ', (positivos));
console.log('Los números negativos son: ', (negativos));
console.log('Los números negativos son: ', (negativos));
console.log('Los números negativos son: ', (negativos));
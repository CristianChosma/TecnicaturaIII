//Escribe una función que tome un número como argumento y 
//  muestre por consola los números pares desde 0 hasta ese número.

function numPares(n) {
    for (let i = 0; i <= n; i += 2) {   // Recorremos los números de 2 en 2
        console.log(i + " ");
    }
}

let numero = 18;    // Se le asigan un valor a la variable
numPares(numero);
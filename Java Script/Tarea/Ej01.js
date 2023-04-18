// 1- El objetivo es recorrer una lista de números y 
// mostrar el cuadrado de cada uno de ellos. 
// Este proceso debe continuar hasta que se detecte un
// número negativo en la lista o hasta que se haya recorrido toda la lista.

let listaNumeros = [1, 2, 3, 4, 5];

for (let i = 0; i < listaNumeros.length; i++) {
let cuadrado = listaNumeros[i] ** 2;
console.log(cuadrado);
}

let listaNumeros1 = [-3,5,8,13,25];
    for (i = 0; i < listaNumeros1.length; i++){
        if (listaNumeros1[i] < 0){
            break;
        }

        let cuadrado = listaNumeros1[i] **2;
 console.log(cuadrado);    

}

    



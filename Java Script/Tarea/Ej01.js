// 1- El objetivo es recorrer una lista de números y 
// mostrar el cuadrado de cada uno de ellos. 
// Este proceso debe continuar hasta que se detecte un
// número negativo en la lista o hasta que se haya recorrido toda la lista.
    
//Generar lista de números
let listaNum = [2, 3, 5, 8, 1, 10];
//Iicializamos la variable
let i = 0;
//Recorremos la lista y calculamos el cuadrado de cada uno de los n´meros de la lista.
while (i < listaNum.length && listaNum[i] >= 0) {
  let cuadrado = listaNum[i] * listaNum[i];
  console.log(cuadrado);
  i++;
}
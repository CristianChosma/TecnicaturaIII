// while
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo wile");

//do while
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
}while(coneo < 3);
console.log("Fin del ciclo do while");  

//for
for(let cotando = 0; contando < 3; contando++);{
    console.log(contando);
}
console.log("Fin del ciclo for");

// Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando);
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer número par");

// La palabra continue y etiqueta Labels
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        breakinicio; // ir a la siguiente iteración
    }
    console.log(contando);
}
console.log("Termina el ciclo");

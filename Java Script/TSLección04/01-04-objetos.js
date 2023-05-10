let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objetos
let persona = {
    nombre: 'Carlos', 
    apellido: 'Gil',
    email: 'cgil@mail.com',
    edad: 30,
    nombreCompleto: function(){ //método o función en JavaScript
        return this.nombre +' '+this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');


let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '23425236500';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');

//for in y accedemos al objeto como si fuera un arreglo
for(propiedad  in persona){
    console.log(propiedad);
    console.log(persona[propiedad]); 
}
console.log('Cambiamos y eliminamos un eror'); 
persona.apellida = 'Betancud' //Cambiamos dinamicamente  un valor del objeto
delete persona.apellida; // Eliminamos el error 
console.log(persona);

 //Distintas formas de imprimir un objeto
 //Número 1: La más sencilla, concatenar cada valor de cada propiedad
 console.log('Distintas formas de imprimir un objeto: Forma 1');
 console.log(persona.nombre+',' +persona.apellido);
 //Número 2: A través del ciclo for in
 console.log('Distintas formas de imprimir un objeto: Forma 2');
 for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
 }       
 //Número 3: La funcón Object.values()
 console.log('Distintas formas de imprimir un objeto: Forma 3');
 let personaArray = Object.values(persona);
 console.log(personaArray);

 //Número 4: Utilizamos el método JSON.stringify
 console.log('Distintas formas de imprimir un objeto: Forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);
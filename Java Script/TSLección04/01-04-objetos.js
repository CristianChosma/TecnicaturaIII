let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objetos
let persona = {
    nombre: 'Carlos', 
    apellido: 'Gil',
    email: 'cgil@mail.com',
    edad: 28,
    idioma: 'ES',

    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculas a mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //método o función en JavaScript
        return this.nombre +' '+this.apellido;
    },
    get nombreEdad(){ // Método get
        return 'El nombre es: '+this.nombre +', Edad: '+this.edad;    
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

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ //Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
} 
let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; //Modificamos el nombre
padre.telefono = '526402645263'; //Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()) //Utilizamos la función
let madre = new Persona3('Laura','Contreras', 'contrerasl@gamil.com');
console.log(madre);
console.log(madre.telefono); //La prpiedad no esta definida 
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//Caso Objeto 1    
let miObjeto = new Object(); // Esta es la opción formal
//Caso Objeto 2
let miObjeto2 = {}; //Opción breve y recomendada

//caso String 1
let miCadena1 = new String('Hola'); //Sintaxis formal   
//caso String 2
let miCadena2 = 'Hola'; //Opción breve y recomendada

//caso con número 1
let miNumero =  new Number(1); //Forma no recomendable
//caso con número 2
let miNumero2 = 1; //Sintaxis recomendable

//caso Boolean 1
let miBoolean = new Boolean(false); // formal
//caso Boolean 2
let miBoolean2 = false; //Sintaxis recomendable

//caso Arreglo 1
let miArreglo = new Array(); // Formal
//caso Arreglo 2
let miArreglo2 = [] // Sintaxis recomendable

//caso Funcion 1
let miFuncion = new function(){}; //Todo depués de new es considerado objeto
//caso Función 2
let miFuncion2 = function(){}; //Sintaxis recomendable

//Uso de prototype
Persona3.prototype.telefono = 54623265592;
console.log(padre)
console.log(madre.telefono);
madre.telefono = 54623265591
console.log(madre.telefono);

//Uso call
let persona4 = {
    nombre:'Juan',
    apellido: 'Peres',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono
        //return this.nombre+'  '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}
console.log(persona4.nombreCompleto2('Lic.', '54256589752'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '542365944'));

//Método Apply  
let arreglo = ['Ing.', '545556565422']
console.log(persona4.nombreCompleto2.apply(persona5));


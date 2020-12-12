// Variables (var, let, const)
var miVariable = 'hola';
var miVariable = 'como estan';

let otraVariable = 'que tal';
otraVariable = 'que tul';

const  CONSTANTE = 'chicos';
// CONSTANTE = 'chiques'; //NO SE PUEDE

// console.log(miVariable,otraVariable,CONSTANTE);


if(true) {
    // console.log(otraVariable)
    
//    const prueba = 'a ver que onda';
//    console.log(prueba);
}

// Tipos de datos
// numero, string, booleano, array, objeto literal


let persona = {
  nombre: 'Javier', // string
  edad: 34, // number
  soltero: true // boolean
}

let persona2 = {
  "nombre": 'Santiago', // string
  "edad": 34, // number
  "soltero": true // boolean
}

// console.log(persona, persona2.edad)


let personas = [
    {  
        nombre: 'Javier', // string
        edad: 34, // number
        soltero: true // boolean
    }, 
    {
        nombre: 'Santiago', // string
        edad: 34, // number
        soltero: true // boolean
    }
];
// console.log(personas[0].edad)

// NaN, null, undefined
var string = Number('23.3');
var int = parseInt('23.3');
var float = parseFloat('23.3');

let malaDivision = string / 2;
// console.log(string,int,float);

// Operadores

// Asignación

// Aritméticos

// Comparación

// Lógicos

// Funciones
console.log(hacerHelado(6));

function hacerHelado(cantidad = 1) {
	return '🍦'.repeat(cantidad);
}


let hacerSushi = function (cantidad =1) {
	return '🍣'.repeat(cantidad);
}

console.log(hacerSushi(5));

// Condicionales

// Arrays
//push, pop, shift, unshift, indexOf, includes, find
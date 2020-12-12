// Tipos de Datos

/* Los tipos de datos le permiten a JavaScript conocer las características y funcionalidades que estarán disponibles para ese dato. */

let verdadero = true // boolean

let texto = "Hola"; // String
let numero = 35 // Number
let numeroDecimal = 35.2 // Number

/* Objetos (object)
A diferencia de otros tipos de datos que pueden contener un solo dato, los objetos son colecciones de datos y en su interior pueden existir todos los anteriores.
Los podemos reconocer porque se declaran con llaves { }.

*/
let persona = {
  nombre: Javier', // string
  edad: 34, // number
  soltero: true // boolean
}

/* Array
Al igual que los objetos, los arrays son colecciones de datos. Los podemos reconocer porque se declaran con corchetes [ ].
Los arrays son un tipo especial de objetos, por eso no los consideramos como un tipo de dato más.
Los mencionamos de manera especial porque son muy comunes en todo tipo de código.
*/

let comidasFavoritas = ['Milanesa napolitana', 'Ravioles con bolognesa', 'Pizza calabresa'];

let numerosSorteados = [12, 45, 56, 324, 452];
let personas = [
 {
  nombre: 'Javier', // string
  edad: 34, // number
  soltero: true // boolean
}, {
  "nombre": 'Santiago', // string
  "edad": 34, // number
  "soltero": true // boolean
}
];

/* Tipos de datos especiales

Los tipos de datos especiales le permiten a JavaScript determinar estados especiales que pueden tener los datos. */

/* NaN (Not a Number) 
Indica que el valor no puede ser parseado como un número */
let malaDivision = "35" / 2; // NaN no es un número

/* Null (valor nulo)
Lo asignamos nosotros para indicar un valor vacío o desconocido.
*/
let temperatura = null; // No llegó un dato, algo falló

/* Undefined (valor sin definir)
Indica la ausencia de valor.
Las variables tienen un valor indefinido hasta que les asignamos uno.
 */
let saludo; // undefined, no tiene valor


var unNuevoNumero = Number('50');


/* SETEO DE TIPOS DE DATOS NUMERICOS */


let positivo = Number('23');
let negativo = Number('-23');
let decimal = Number('2.5');


// En esta variable debería quedar guardado solo el número 10
var numeroRedondeado = parseInt("10.59");

// En esta variable debería quedar guardado solo el número 51
var numeroRedondeado = parseInt("51.598597");


const nan = parseInt('aver') // NaN
const correcto = parseInt('55.3') // 55.3

const unoConDecimales = parseFloat("3.14"); //float

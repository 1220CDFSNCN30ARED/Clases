/* ==========================
    VARIABLES
========================== */
/* Las variables son espacios de memoria en la computadora donde podemos almacenar distintos tipos de datos. */


/* 
Es una buena práctica que los nombres de las variables usen el formato camelCase, 
como variableEjemplo en vez de variableejemplo o variable_ejemplo.
 */

/* 
Declaración con let 

La principal diferencia entre var y let es que let solo será accesible en el bloque de código en el que fue declarada.
Los bloques de código son normalmente determinados por las llaves { }.
*/


/* 
Declaración con const

Las variables declaradas con const funcionan igual que las variables let, estarán disponibles solo en el bloque de código en el que se hayan declarado.
Al contrario de let, una vez que les asignemos un valor, no podremos cambiarlo.

*/



/* ==========================
    NUMEROS
========================== */
// Número entero
var edad = 35;

// Número con decimales
var precio = 150.65

/* ==========================
CADENA DE CARACTERES (STRING)
========================== */

// Con comillas simples
let nombre = 'Mamá Luchetti';

// Con comillas dobles obtenemos el mismo resultado
let ocupacion = "Master of the sopas";

/* ==========================
LÓGICOS O BOOLEANOS
========================== */

var laClaseEstaReBuena = true;
var laClaseQueVieneHayAsado = false;


console.log(edad)
console.log(precio)
console.log(nombre)
console.log(laClaseEstaReBuena,laClaseQueVieneHayAsado)
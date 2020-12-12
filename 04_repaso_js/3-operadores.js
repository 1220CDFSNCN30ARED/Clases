
/* ==========================
    OPERADORES
========================== */
// Los operadores nos permiten manipular el valor de las variables, realizar operaciones y comparar sus valores 

/* ==========================
DE ASIGNACIÓN
========================== */
// El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"

var edad = 40

/* ==========================
ARITMÉTICOS
========================== */
// Nos permiten hace operaciones matemáticas

10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15++    //---> Incremento de uno en uno: 15 + 1
15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1

/* ==========================
DE COMPARACIÓN SIMPLE
========================== */

10 == 15 //---> Igualdad 
10 != 15 //---> Desigualdad 

/* ==========================
DE COMPARACIÓN ESTRICTA
========================== */

10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo

/* ==========================
OPERADORES RELACIONALES
========================== */
15 > 10  //---> Mayor que...
15 >= 10  //---> Mayor igual que...
15 < 10  //---> Menor que...
15 < 10  //---> Mayor igual que...

/* ==========================
LÓGICOS
========================== */
// Permiten combinar valores booleanos y su resultado a la vez también es un booleano
// && Todos sus valores deben evaluar como TRUE

!  // not 

(10 > 15) && (10 != 20) //---> and 


(10 > 15) || (10 != 20) //---> TRUE porque 10 != 20 es verdadero

/* Los operadores de comparación, lógios y relacionales siempre devolverán un booleano, es decir, true o false, como resultado. */


/* ==========================
DE CONCATENACIÓN
========================== */
/* Sirve para unir cadenas de texto. Devuelve otra cadena de text */

let nombre = 'Teodoro';
let apellido = 'García';
let nombreCompleto = nombre + ' ' + apellido;





// Ejercicio
let primerNumero = 45;
let segundoNumero = 55;

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;


console.log(resultadoDivision)
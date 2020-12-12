
/* ==========================
    FUNCIONES
========================== */
/* Una función es un bloque de código que nos permite agrupar funcionalidad para usarla todas las veces que necesitemos.
Normalmente realiza una tarea específica y retorna un valor como resultado.
 */

function sumar (a, b) {
	return a + b;
}


/* FUNCIONES DECLARADAS 
    Son aquellas que se declaran usando la estructura básica. Pueden recibir un nombre, escrito a continuación de la palabra reservada function, a través del cual podremos invocarla. */


function hacerHelado(cantidad = 1) {
	return '🍦'.repeat(cantidad);
}

console.log(hacerHelado(6))


/* FUNCIONES EXPRESADAS
    Son aquellas que se asignan como valor de una variable. En este caso, la función en sí no tiene nombre, es una función anónima. 
    Para invocarla podremos usar el nombre de la variable que declaremos.
 */

let hacerSushi = function (cantidad =1) {
	return '🍣'.repeat(cantidad);
}


/* INVOCACIÓN
Podemos imaginar las funciones como si fueran máquinas.
Durante la declaración nos ocupamos de construir la máquina y durante la invocación la ponemos a funcionar.
*/
console.log(hacerHelado(5)); // Retornará '🍦'
console.log(hacerSushi(5)); // Retornará '🍣'


/* 
    EJERCICIOS DEL PLAYGROUND
*/

// Ejercicio 1
function ejemplo() {
    return "hola, soy una función"
}
ejemplo();

// Ejercicio 2
let ejemplo2 = function () {
    return "hola, soy una función expresada"
}

ejemplo2();

// Ejercicio 3
function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

// Ejercicio 4
function esPar(n) {
    return n % 2 == 0
}
esPar(3);


// Ejercicio 5
function anterior(n) {
    return n - 1
}
function triple(n) {
    return n * 3
}
function anteriorDelTriple(n) {
    return anterior(triple(n));
}
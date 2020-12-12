console.log('Hola desde la calculadora');

let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

function calculadora(operacion,num1,num2){
    console.log(operacion);
    return operacion(num1,num2);
}c

console.log(calculadora(restar,21, 5));
console.log(calculadora(sumar,10, 13));
console.log(calculadora(restar,21, 33));
console.log(calculadora(multiplicar,2, 6));
console.log(calculadora(multiplicar,5, 0));
console.log(calculadora(dividir,10, 5));
console.log(calculadora(dividir,40, 0));


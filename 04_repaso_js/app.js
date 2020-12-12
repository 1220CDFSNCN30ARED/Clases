console.log('Calculadora Fantástica');
/* SUMA */
function sumar(num1,num2){
    return num1 + num2;
}

let suma1 = sumar(34,70);
let suma2 = sumar(suma1,45);
console.log(suma2);


/* RESTAR */
function restar(num1,num2){
    return num1 - num2;
}

console.log(restar(34,16));




/* MULTIPLICAR */
// Tener en cuenta que si uno de los valores es 0
function multiplicar(num1,num2){
    if( num1==0 || num2== 0 ){
        return 0;
    }
    return num1 * num2;
}
console.log('Multiplicando')
num1 = 21;
num2 =12;
let multiplicacion1 = 'multiplicar ' + num1 + ' * '+ num2 + ' = ' + multiplicar(11,6);


let multiplicacion2 = multiplicar(0,6);
let multiplicacion3 = multiplicar(11,0);
console.log(multiplicacion1,multiplicacion2,multiplicacion3)

/* DIVIDIR */


// Mis calculos
// let suma1 = 'El resultado de sumar 50 + 10 = ' + sumar(50,100);

// console.log('El resultado de sumar 50 + 10 = ' + sumar(50,100));
console.log('Hola desde la calculadora');

function sumar(num1, num2) {
    return num2 + num1;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return 0;
    }

    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 == 0) {
        return 'No se puede dividir por 0';
    }

    return num1 / num2;
}

console.log(sumar(10, 13));
console.log(restar(21, 5));
console.log(restar(21, 33));
console.log(multiplicar(2, 6));
console.log(multiplicar(5, 0));
console.log(dividir(10, 5));
console.log(dividir(40, 0));

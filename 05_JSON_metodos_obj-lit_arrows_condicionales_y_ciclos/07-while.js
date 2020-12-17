//  Estructura
// while (condicion) {
//     // Bloque de código que se ejecuta
//     // Si la condición es verdadera
// }

// Ejercicio 1
function count(desde, hasta) {
    while (desde < hasta) {
        console.log('El número actual es ' + desde + ' y es menor a ' + hasta)
        desde++
    }
}
count(4,6)

// Estructura de un do-while
// do {
//     // Bloque de código que se ejecuta al menos una vez
//     // y cada vuelta si la condicion es verdadera
// } while ()

// Ejercicio 2
function encontreUn5(numeros) {
    let i = 0;
    do {
        if (numeros[i] == 5) {
            console.log('Se encontró un 5!')
        } else {
            console.log(numeros[i])
        }
        i++
    } while (i < numeros.length)

}
encontreUn5([3,4,5,6,7,5,3,2])


// Ejercicio 3
function tablaDeMultiplicar(numero) {
    let i = 0
    while (i <= 10) {
        console.log(numero + ' * ' + i + ' = ' + numero * i)
        i++
    }
}
tablaDeMultiplicar(3)
tablaDeMultiplicar(5)
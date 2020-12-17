//Retoma de conceptos
// JSON
let objetoLiteral = { nombre: 'Carla', pais: 'Argentina' };
let datosConvertidos = JSON.stringify(objetoLiteral,null,' ');
//
///

let otraVezAObjetos = JSON.parse(datosConvertidos,'utf-8');

// console.log(objetoLiteral);
// console.log();
// console.log(datosConvertidos)
// console.log();
// console.log(otraVezAObjetos)

// Metodos Stings

// let frase = 'Breaking Bad Rules!';

// let pedacito = frase.slice(9,12); // devuelve 'Bad'

// console.log(frase,pedacito,frase.indexOf('Bad'));

// Objetos literales
var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    energia: 100,
    saludar: function () {
        // Accedemos a la propiedad "nombre" de ESTE objeto con la palabra reservada THIS
        return "¡Hola! Mi nombre es " + this.nombre;
    },
    entrenar(horas){
        console.log('empiezo a entrenar')
        this.energia = this.energia - horas * 2  
        return "recien termino de entrenar"
    }
}
// console.log(tenista.nombre) // muestra el nombre
// console.log(tenista.saludar()) // ejecuta la funcion saludar
// console.log(tenista)
// console.log(tenista.entrenar(2)) // ejecuta la funcion saludar
// console.log(tenista.entrenar(2)) // ejecuta la funcion saludar
// console.log(tenista.entrenar(10)) // ejecuta la funcion saludar
// console.log(tenista)

function Auto(marca, modelo){
	this.marca = marca;
	this.modelo = modelo;
};

let auto1 = new Auto('Ford','Falcon');
let auto2 = new Auto('Toyota','Corolla');

// console.log(auto1);
// console.log();
// console.log(auto2);



// Arrow Function

function sumar(a,b) {
    return a + b;
}

let sumar = (a,b) => a + b
let multiplicarPor3 = a => {
    //hacer algo mas
    return a * 3;
} 

// Condicionales (If ternario, Switch)


// let dia = 'viernes'
// let viernes = 'viernes'
// function finDeSemana(dia) {
//     switch (dia) {
//         case viernes:
//             console.log('buen finde');
//             break;
//         case 'lunes':
//             console.log('buena semana');
//             break;
//         default:
//             console.log('buen dia');
//     }
// }
// finDeSemana(dia);
let num1 = 14;

if(num1 < 20){
   console.log('<20');
} else if (num1 >= 20 && num1 < 30){
   console.log('> 20 y < 30');
} else {
   console.log('>=30');
}

let resultado = num1 < 20 ? console.log('<20') : num1 >= 20 && num1 < 30 ? console.log('> 20 y < 30') :  console.log('>=30');




// Ciclos I 
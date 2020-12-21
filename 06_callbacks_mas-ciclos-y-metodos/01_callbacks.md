# Callbacks
Un callback es una **función** que se pasa como **parámetro** de otra **función**. 

```js
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
};

function saludar(nombre, apellido, callback) {
    return '¡Hola ' + callback(nombre, apellido) + '!';
};

saludar('Juanito', 'Sánchez', nombreCompleto);
```

> La función saludar() ¿solo funciona si le pasamos como callback la función nombre()?
> ¡No!
> Podemos pasarle cualquier otra función que devuelva un string, ya que en la estructura interna de saludar() definimos que opere con ese tipo de dato

```js
function iniciales(nombre, apellido) {
    return nombre[0] + apellido[0];
};

function saludar(nombre, apellido, callback) {
    return '¡Hola ' + callback(nombre, apellido) + '!';
};

saludar('Juanito', 'Sánchez', iniciales);
```

## Playground
Ej 1
```js
let doble = a => a*2;
let triple = a => a*3;
let aplicarCallback = (num,operacion) => operacion(num);
```

Ej 2
```js
const suma = (a,b) => a + b
const resta = (a,b) => a - b
const multiplicacion = (a,b) => a * b
const division = (a,b) => a / b
            
const calculadora = (a,b,cabllcabk) => cabllcabk(a,b)
```
Ej 3
```js
function procesar(array, func) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado[i] = func(array[i]);
    }        
    return resultado;
}        
    
function largoString(texto) {
    return texto.length;
}

function agregarHttp(url) {
    return "http://"+url;
}
  
let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]

let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
console.log(largoDeElmentos); // imprime [ 14, 13 ]
```
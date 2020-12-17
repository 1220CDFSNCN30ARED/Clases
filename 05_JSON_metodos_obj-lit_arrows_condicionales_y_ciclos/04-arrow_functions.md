# Arrow Functions
Las funciones arrow nos permiten escribirlas con una sintaxis más compacta.

```js
// funcion simple
function sumar (a, b) { return a + b }
// arrow function 
let sumar = (a, b) => a + b;
```


## Playground
Ej 1
```js
let dameCinco = () => [1, 2, 3, 4, 5];
let multiplicarPorDos = () => 123*2;
let mostrarNombre = () => "Mi nombre es Hernán";
```

Ej2 
```js
let saludar = nombre => 'Hola, ' + nombre + '!';
```

Ej 3
```js
let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' + apellido + '!';
```
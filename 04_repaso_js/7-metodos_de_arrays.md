# METODOS DE UN ARRAY (I)
Disponemos de muchos métodos para trabajar con la información dentro de los arrays

## .push()
Agrega uno o varios elementos al final del array.

```js
let colores = ['Rojo','Naranja','Azul'];
colores.push('Violeta'); // retorna 4
console.log(colores); // ['Rojo','Naranja','Azul','Violeta']

colores.push('Gris','Oro');
console.log(colores); 
```

## .pop()
Elimina el ultimo elemento de un array

```js
let series = ['Mad Men','Breaking Bad','The Sopranos'];

// creamos una variable para guardar lo que devuelve .pop()
let ultimaSerie = series.pop();

console.log(series); // ['Mad men', 'Breaking Bad']
console.log(ultimaSerie); // ['The Sopranos']

```

## .shift()
Elimina el primer elemento de un array.

```js
let nombres = ['Frida','Diego','Sofía'];

// creamos una variable para guardar lo que devuelve .shift()
let primerNombre = nombres.shift();

console.log(nombres); // ['Diego', 'Sofia']
console.log(primerNombre); // ['Frida']

```

## .unshift()
Agrega uno o varios elementos al principio de un array.

```js
let marcas = ['Audi'];

marcas.unshift('Ford');
console.log(marcas); // ['Ford', 'Audi']

marcas.unshift('Ferrari','BMW');
console.log(marcas); // ['Ferrari','BMW','Ford', 'Audi']

```
## .join()
Une los elementos de un array utilizando el separador que le especifiquemos. Si no lo especificamos, utiliza comas.

```js
let dias = ['Lunes','Martes','Jueves'];

let separadosPorComa = dias.join();
console.log(separadosPorComa); // 'Lunes,Martes,Jueves'

let separadosPorGuion = dias.join(' - ');
console.log(separadosPorGuion); // 'Lunes - Martes - Jueves'

```

## .indexOf()
Busca en el array el elemento que recibe como parámetro.
```js
let frutas = ['Manzana','Pera','Frutilla'];
frutas.indexOf('Frutilla');
// Encontró lo que buscaba. Devuelve 2, el índice del elemento

frutas.indexOf('Banana');
// No encontró lo que buscaba. Devuelve -1

```

## lastIndexOf()
Similar a .indexOf(), con la salvedad de que empieza buscando el elemento por el final del array (de atrás hacia adelante).  
```js
let clubes = ['Racing','Boca','Lanús','Boca'];

clubes.lastIndexOf('Boca');
// Encontró lo que buscaba. Devuelve 3

clubes.lastIndexOf('River');
// No encontró lo que buscaba. Devuelve -1
```

## includes()
También similar a .indexOf(), con la salvedad que retorna un booleano.

```js
let frutas = ['Manzana','Pera','Frutilla'];

frutas.includes('Frutilla');
// Encontró lo que buscaba. Devuelve true

frutas.includes('Banana');
// No encontró lo que buscaba. Devuelve false

```
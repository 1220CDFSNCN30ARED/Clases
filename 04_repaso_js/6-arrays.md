# Arrays
Los arrays nos permiten generar una colección de datos ordenados.

## Estructura de un array
Utilizamos corchetes [] para indicar el inicio y el fin de un array.
Utilizamos comas , para separar sus elementos.

Dentro de un array, podemos almacenar la cantidad de elementos que queramos, sin importar el tipo de dato de cada uno.

Es decir, podemos tener en un mismo array datos de tipo string, number, boolean y todos los demás.

```js
let miArray = ['Star Wars', true, 23];
```

## Posiciones dentro de un array
Cada dato de un array ocupa una posición numerada conocida como índice. La primera posición de un array es siempre 0.

```js
let pelisFavoritas = ['Star Wars', 'Kill Bill', 'Alien'];
                        // 0            1           2
```

Para acceder a un elemento puntual de un array, nombramos al array y, dentro de los corchetes, escribimos el índice al cual queremos acceder.

```js
pelisFavoritas[2]; // Alien
```

## Longitud de un array
** .length ** Devuelve la cantidad de elementos de un array

```js
pelisFavoritas.length; // Devuelve 3, el número de elementos del array
```
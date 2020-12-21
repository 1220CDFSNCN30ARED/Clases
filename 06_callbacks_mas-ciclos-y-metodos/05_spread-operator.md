# Spread Operator y Rest Parameter

## Spread Operator 
Este operador permite expandir cada uno de los datos de un elemento iterable dentro de otro elemento.
Nos sirve para copiar y mover datos de un lugar a otro de una forma eficaz.

### En Arrays
```js
let clubesUno = ['Boca', 'River', 'Racing'];
let clubesDos = ['San Lorenzo', 'Lanús', 'Gimnasia'];
let todosLosClubes = [...clubesUno, ...clubesDos];
```

### En Objetos
```js
let auto = {marca:'Ferrari', kms:0, anio:2019};
let corredorUno = {nombre:'Vettel', edad:32, ...auto};
let corredorDos = {nombre:'Leclerc', edad:21, ...auto};
```

### Spread en funciones
```js
let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas); // Devuelve 3.2
```
## Rest Parameter

Utilizado como último parámetro de una función nos permite capturar **cada uno** de los **argumentos adicionales** pasados a esa función.

La diferencia es que se utiliza durante la definición de la función, y no durante su ejecución.

```js
function sumar(...numeros) {
   // Sabiendo que números es ahora un array utilizamos
   // el método reduce para obtener la sumatoria
   return numeros.reduce((acum, num) => acum += num);
}

sumar(1, 4); // devuelve 5
sumar(13, 6, 8, 12, 23, 37); // devuelve 99

```

> El parámetro **rest** debe ser siempre, siempre, siempre el último!!!
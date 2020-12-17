# Condicionales
## If Ternario
Para el if ternario es obligatorio poner código en la segunda expresión. Si no queremos que pase nada, podemos usar un string vacío ''
```js
// Estructura
4 > 10  ? 'El 4 es más grande' : 'El 10 es más grande';
```

## Switch 
El switch nos propone una sintaxis más legible para los casos en los que queremos evaluar muchas posibilidades de un solo valor.

```js
switch (expresión) {
	case valorA:
// código a ejecutar si la expresión es igual a valorA
	break;
case valorB:
// código a ejecutar si la expresión es igual a valorB 
break;
}

```

### Agrupamiento
El switch también nos permite agrupar casos y ejecutar un mismo bloque de código para cualquier caso de ese grupo.
```js
switch (expresión) {
	case valorA:
	case valorB:
// código a ejecutar si la expresión es igual a ValorA o B
	break;
case valorC:
//código a ejecutar si valorC es verdadero
break;
}
```

### Default
Por lo general escribimos el bloque default a lo último. En ese caso, no es necesario escribir el break.
```js
switch (expresión) {
	case valorA:
// código a ejecutar si valorA es verdadero
    	break;
default:
// código a ejecutar si ningún caso es verdadero
}
```

## Playgorund

Ejercicio 1
```js
let dia = 'lunes'
function finDeSemana(dia) {
    switch (dia) {
        case 'viernes':
            console.log('buen finde')
            break
        case 'lunes':
            console.log('buena semana')
            break
        default:
            console.log('buen dia')
            break
    }
}
finDeSemana(dia);
```

Ejercicio 2
```js

function tengoClases(dia) {
    switch (dia) {
        case 'lunes':
        case 'miércoles':
        case 'viernes':
            console.log('tenés clases')
            break
        default:
            console.log('no tenés clases')
    }
}
console.log(tengoClases('miércoles'))
```

Ejercicio 3
```js
let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado  > bicicletaB.rodado ? bicicletaA : bicicletaB ;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );
```
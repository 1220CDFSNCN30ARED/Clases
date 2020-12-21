# Destructuring
Nos permite extraer datos de **arrays** y **objetos literales** 

## Arrays
Creamos una variable y, **entre corchetes**, declaramos los nombres de las variables 
```js
let colores = ['Rojo', 'Azul', 'Amarillo'];
let [rojo, azul, amarillo] = colores;
```
> Si queremos saltar un valor, podemos dejar vacío el nombre de la variable que correspondería con esa posición.

## Objetos Literales
Creamos una variable y, entre llaves, declaramos el o los nombres de las **propiedades**
```js
let persona = {nombre: 'Laura', edad: 31, faltas: 3};
let {nombre, edad} = persona;
```

> La desestructuración no modifica el array u objeto literal de origen

## Playground
Ej 1:
```js
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [ ,bariloche, ,china, ,] = destinosDelMundo
```
Ej 2:
```js
let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca,color} = auto;
```
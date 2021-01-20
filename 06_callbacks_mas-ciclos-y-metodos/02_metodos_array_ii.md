# Métodos de un array (Parte 2)

## .map()
Recorre el array y devuelve un nuevo array modificado.

```js
let numeros = [2, 4, 6];
let elDoble = numeros.map(function(num){
    // Multiplicamos por 2 cada número
    return num * 2;
});
```

## .filter()
Recorre el array y filtra los elementos según una condición que exista en el callback. 

```js
var edades = [22, 18, 17, 14, 30];
var el_de_8 = edades.find(function(edad){
   return edad == 8;
});

console.log(el_de_8); // [22, 30]
```


## .find()
Recorre el array devuelve la primera ocurrencia. 

```js
var edades = [22, 8, 17, 14, 30];
var mayores = edades.find(function(edad){
   return edad == 8;
});
```


## .reduce()
Recibe un callback que se va a ejecutar sobre cada elemento del array. 
Este, a su vez, recibe dos parámetros: un acumulador y el elemento actual que esté recorriendo.
```js
var nums = [5, 7, 16];
var suma = nums.reduce(function(acum, num){
    return acum + num;
});

console.log(suma); // 28
```

## .forEach
Recibe un callback como parámetro y, a diferencia de los métodos anteriores, este no retorna nada.
```js
var paises = ['Argentina', 'Cuba', 'Perú'];

paises.forEach(function(pais){
   console.log(pais);
});
```


## Playground
Ej 1:
```js
let aprobados = estudiantes.filter(e => e.aprobado);
let desaprobados = estudiantes.filter(e => !e.aprobado);
```


Ej 2:
```js
let horariosPartida = [12, 14, 18, 21];
let horariosAtrasados = horariosPartida.map(hora => hora - 1);
```

Ej 3:
```js
let vueltas = [5, 8, 12, 3, 22]
let totalVueltas = vueltas.reduce((acum, vuelta) => acum + vuelta)
```

Ej 4:
```js
listaDeSuperMercado.forEach(item => {
    console.log(item)
})
```
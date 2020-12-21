# Date
JavaScript, al igual que muchos lenguajes de programación, nos ofrece un objeto para generar fechas y trabajar con ellas.

## Declaración
```js
let miFecha = new Date();
```

## Métodos

### .getDate()
Retorna el número del día del mes de una fecha. 
```js
let diaDeMiFecha = miFecha.getDate();
console.log(diaDeMiFecha);
// El N° del día de miFecha → ej: 22 
```

### .getDate()
Retorna el **número del día **del mes de una fecha. 
```js
let diaDeMiFecha = miFecha.getDate();
console.log(diaDeMiFecha);
// El N° del día de miFecha → ej: 22 
```

### .getMonth()
Retorna el **número del mes** de una fecha. 
 
```js
let mesDeMiFecha = miFecha.getMonth();
console.log(mesDeMiFecha);
// El N° del mes de miFecha → ej: 5 (Junio)
```

### .getDay()
Retorna **el día** de una fecha. 
 
```js
let diaSemanaDeMiFecha = miFecha.getDay();
console.log(diaSemanaDeMiFecha);
// El N° de día de la semana de miFecha → ej: 2 (martes)

```

### .getFullYear()
Retorna el año completo (4 dígitos) de una fecha. 

```js
let anioDeMiFecha = miFecha.getFullYear();
console.log(anioDeMiFecha);
// El N° del año actual → ej: 2020
```

## Fechas dinámicas
```js
let miFechaCumple = new Date(1983,11,24);
```

## Playground
Ej:

```js
console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+fecha.getDate()+' del mes '+fecha.getMonth()+' del año '+fecha.getFullYear())
```
# Modulos

Un módulo es un bloque de código reutilizable, cuya existencia o no, no altera el comportamiento de otros bloques de código.
A partir de eso, Node.js propone fragmentar nuestro código en pequeños módulos, en donde cada uno tendrá una funcionalidad específica para alcanzar un objetivo definido.


## Tipos de módulos

Existen tres tipos de módulos:

- Los módulos nativos: ya vienen instalados cuando creamos un proyecto de Node.js.
- Los módulos de terceros: podemos instalarlos usando algo llamado npm que vamos a conocer más adelante.
- Los módulos creados: aquellos que escribimos nosotros.

## Modulos Nativos 

Muchos m{odulos ya vienen con Node, podes consultarlos desde su API

[API Node](https://nodejs.org/api/)

## Módulos Creados

Para requerir un módulo creado por nosotros, primero hay que crear un archivo con extensión .js y, dentro del mismo, escribir el script que necesitemos.

Una vez definido nuestro código, tenemos que dejarlo accesible para poder importarlo dentro de nuestra aplicación. Para eso, hay que hacer uso del objeto nativo module y de su propiedad .exports. A este le asignaremos el nombre de la variable que contenga la información que queremos exponer.

### Ejemplo de un modulo
```js
let series = ['Friends', 'Mr. Robot', 'Breaking Bad'];
module.exports = series; 
```

### Requerir un modulo
```js
const fs = require('fs');
```


# GUIA DE LA CLASE

## Objetivos
- Levantar un servidor con Express
- Introducir protocolo HTTP
- Organizar la estructura de carpetas de un proyecto

## Presentación
[Introducción a servidores](Introducción%20a%20servidores.pdf)

## Express
- ¿Para usar Express en nuestra aplicación qué debemos hacer primero?

```
npm init -y
npm install express --save
```
- ¿Cómo se suele inicializar una app con Express? Ver archivo [app](ejercitacion/app.js)
- Si queremos levantar el servidor de una app de Express ¿Qué método debemos usar? 
  app.listen()

## Micro Desafio 1
Paso levantar un servidor web con Express que responda al puerto 3030. 

## Estructura base de un proyecto

- public
  - css
  - img
- views
- app.js

## Micro Desafio 2
Para este desafío armaremos una estructura de carpetas simple como vimos recién

## Rutas
Con las rutas podemos decirle a express que recurso vamos a utilizar para cada request-
```js
app.get('/', (req, res) => {
	res.send('Hola soy la home');
})
```
## PATH
```js
path1 = path.resolve("users/admin", "readme.md"); 
console.log(path1) 
// D:\laragon\www\Clases\ejercicio_clase\users\admin\readme.md

path2 = path.resolve("users", "admin", "readme.md"); 
console.log(path2) 
// D:\laragon\www\Clases\ejercicio_clase\users\admin\readme.md

path3 = path.resolve("algo","/users/admin", "readme.md"); 
console.log(path3)
// D:\users\admin\readme.md

path4 = path.join('/users');
console.log(path4)
// \users

path4 = path.join(__dirname,'users','admin','readme.md');
console.log(path4)
// D:\laragon\www\Clases\ejercicio_clase\users\admin\readme.md
``` 

## sendFile
Podemos enviar como respuesta un archivo html
```js
//cuando alguien requira la ruta /el servidor devolvera el archivo html
app.get('/', (req, res) => {
	res.sendFile(path.resolve('./views/index.html'))
})
```

## Micro Desafio 3
1. Ya estamos en condiciones de ubicar nuestros archivos .html en su lugar.Son nuestras vistas. ¿Dónde los ubicamos?
2. Ahora, debemos volver a nuestro archivo app.js para introducir el códigonecesario para vincular las URLs con los recursos que acabamos de ubicar.

Por ejemplo, debemos lograr que al introducir en el navegador “localhost:3030/home” se dé acceso, o se devuelva, al archivo index.html. 
Lo mismo deberá ocurrir con todos nuestros recursos conforme lo detallado enel “objetivo” de esta ejercitación

Se recomienda el uso de ‘path’ para el armado de las rutas

## Archivos Estaticos
Para que nuestros archivos estén disponibles publicamente tenemos que indicarle a express una carpeta.
```js
app.use(express.static('public'));
// Abre al publico la carpeta public para que se puedan vincular los recursos estáticos
```
## Micro Desafío 4
La app ya funciona, pero sin los estilos CSS ni las fotos. A no preocuparse. ¡Vamos asolucionar esto!
1. Coloquemos nuestro archivo de estilos styles.css en su lugar. Para eso,habíamos creado una carpeta llamada “css” dentro de la carpeta “public”.
2. También coloquemos las fotos de nuestros héroes, y el fondo de nuestroindex (es decir, todos los archivos .jpg), en la carpeta “img”.
3. ¡Listo! Pero sigue sin funcionar. Pues bien, solo falta aclarar en nuestro app.jsla ubicación de nuestros archivos estáticos, con la línea:app.use(express.static(‘public’));


## Servidor Express Ejemplo
```js
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(3000, () => console.log('Servidor corriendo'));
```

## YAPA
Para correr nuestros proyectos de forma mas facil y que se reinicie con cada cambio de archivos podemos usar nodemon e incorporarlo en los scripts de nuestro package.json

```
"scripts": {
    "start": "nodemon app.js"
  },
```
De esta manera cuando hagamos **npm start** en la consola iniciará nuestro servidor y quedará atento a los cambios que se realice en los archivos, cuando detecta un cambio reiniciará nuestro servidor


## PROYECTO
Recomiendo completar el proyecto de la próxima clase.


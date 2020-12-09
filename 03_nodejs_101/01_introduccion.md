# NODE
Es un entorno de ejecución que nos permite ejecutar JavaScript por fuera de un navegador web.

## Arquitectura de Node.js

Todos los navegadores presentan un motor de JavaScript para leer y renderizar (representar gráficamente) código de JavaScript. Esto hace que el lenguaje dependa sí o sí de un navegador para poder ejecutarse.

Los navegadores utilizan distintos motores y es por esta variedad que a veces un mismo código de JavaScript puede comportarse de manera diferente dependiendo del navegador en el que se esté ejecutando.

Node.js está construido bajo el motor v8 de Google Chrome. Esto lo convierte en un entorno de ejecución para JavaScript y logra que el lenguaje deje de depender del navegador para poder ejecutarse.

De esta forma, podemos programar tanto el front-end como el back-end en un mismo lenguaje: JavaScript.

## Probando Node.js
Para testear Node.js, debemos crear una carpeta llamada Node.

Abrir el editor de texto Visual Studio Code. Ir a Archivo/Abrir carpeta (File/Open folder) y seleccionar la carpeta que acabamos de crear llamada Node.

Luego, crear un archivo llamado prueba.js y escribir el siguiente script: 

```
console.log(‘¡Probando NodeJS!’);
```
Abrir una terminal. Para eso, ir a Terminal/Nueva terminal, o ejecutar el atajo Ctrl+Shift+ñ.

En la terminal, escribir el siguiente comando: 

```
node prueba.js
```
# Colores

## Formatos
Los siguientes formatos se pueden aplicar en cualquier propiedad de CSS que reciba color:
  - Nombre (podemos explorar el resto en [esta página](https://htmlcolorcodes.com/color-names/)) *purple*
  - Hexadecimal *#f05331*
  - RGB *rgb(255, 100, 50)*
  - RGBA *rgba(122, 50, 125, 0.5)* El último número representa la opacidad que tendrá el elemento. Va del 0 al 1 y mientras menor el número, mayor la transparencia.

## Color
El atributo **color** nos permite asignarle un color al texto de un elemento.

```css
h2 { color: purple }

h4 { color: #3459ff }

p { color: rgb(12, 34, 32) }
```


## Color de fondo
El atributo background-color nos permite asignarle un color de fondo a un elemento. 
```css
p { background-color: tomato }

p { background-color: #3459ff }

p { background-color: rgb(12, 34, 32) }
```


## La opacidad
Mediante el atributo opacity le otorgamos **transparencia** a todo el elemento.
```css
p { opacity: 0.5 }
```
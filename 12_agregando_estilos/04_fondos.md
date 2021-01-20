# Fondos


## Color de fondo
El atributo background-color nos permite asignarle un color de fondo a un elemento. 
```css
p { background-color: tomato }
p { background-color: #3459ff }
p { background-color: rgb(12, 34, 32) }
```


## Imágenes de fondo
```css
body { background-image: url('../img/bici.jpg') }
```

## background-repeat
Nos permite controlar si se va a repetir, y de qué manera, la imagen dispuesta
(repeat, no repeat, repeat-x, repeat-y, round y space.)

```css
body { background-repeat: repeat-x }
```

## background-position
Nos permite mover la imagen dentro del elemento y decidir dónde colocarla.
Recibe como valores tamaños en pixeles y porcentajes, así como también right, top, bottom, left.
 
```css
body { background-position: right top }
```

## background-attachment
Nos permite establecer si la imagen de fondo se va a mover junto con la página al hacer scroll o si se va a quedar fija
```css
body { background-attachment: fixed }
```

## background-size
Nos permite establecer el tamaño de la imagen de fondo
```css
body { background-size: 130px };
```

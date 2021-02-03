# Organizando Elementos

## Posicionamiento

### Puntos de referencia
Cada uno de los elementos de nuestra página web tiene cuatro puntos de referencia y esos son sus costados: **superior, derecho, inferior e izquierdo**. 
En CSS serán **top, right, bottom y left**.

### Relativo
El posicionamiento relativo nos permite trasladar un elemento desde su posición original a una nueva posición.

> el espacio que ocupaba originalmente seguirá ocupado

```css
.caja-1 {
    position: relative;
    left: 100px;
    top: 50px;
}

```

### Absoluto
El posicionamiento absoluto nos permite trasladar un elemento tomando como referencia los costados del body

>el espacio que ocupaba quedará vacío y otros elementos podrán ocuparlo.


```css
.caja-2 {
    position: absolute;
    right: 100px;
    bottom: 50px;
}

```

Si nuestras cajas (hijas) están dentro de otra caja (padre), el punto de referencia seguirá siendo el body a menos que hagamos relativa la posición de su padre.

```css
div { position: relative }

.caja-2 {
    position: absolute;
    right: 100px;
    top: 50px;
}

```

### Fixed
El posicionamiento fijo nos permite trasladar un elemento tomando como referencia la ventana del navegador.
```css
.botonFucsia {
    position: fixed;
    right: 50px;
    bottom: 50px;
}

```

## Z-Index

El z-index nos permite cambiar el orden de las “capas” dentro de un documento HTML. 

```css
.caja-1 {
    position: relative;
    left: 100px;
    top: 50px;
}

.caja-2 {
    position: relative;
    z-index: 10;
}

```
## Transiciones

Al crear transiciones podremos modificar el valor de una propiedad de manera gradual
### Posición inicial
Primero vamos a tener que determinar cuál es el elemento que queremos manipular

```css
button {
    background-color: #eaeaea;
	color: #000;
    transition-property: background-color, color;
	transition-duration: 0.5s;
    
}

button {
    background-color: #eaeaea;
	color: #000;
	transition: background-color 0.5s, color 0.5s;
}


button:hover {
    background-color: #1a73e8;
    color: #fff
}

```


## Animaciones
En CSS podemos crear una animación que se podrá reutilizar.
Todas las animaciones van desde 0% a 100%

```css
@keyframes fantasma {
    0% { opacity: 0% }
    25% { transform: translateY(-20px); opacity: 100% }
    100% { opacity: 0% }
}

.fantasma {
    animation: fantasma 3s infinite;
}

```
# Introducción a CSS

1. Vinculación
2. Reglas
3. Selectores

## ¿Para qué sirven las hojas de estilo?
Estas sirven para estilizar nuestro contenido HTML. 
Con CSS podemos cambiar colores, fondos, tipografías, anchos, altos, 
y mucho más. Así como también generar animaciones y transiciones.

## Vinculación
Contamos con 3 métodos para vincular nuestros archivos CSS con el documento HTML.

### Externa
Es la mas común, va dentro de la etiqueta **head**
```html
<link href="css/estilos.css" rel="stylesheet">
```

### Interna
Se usa la etiqueta **style** dentro de la etiqueta **head**
```html
<head>
    <meta charset="UTF-8">
    <style>
        body {background: blue}
    </style>
</head>
```

### En línea

Se pone el estilo en la misma etiqueta ***CACA CACA CACA *** - ***ESTO NO SE HACE NUNCA NUNCA NUNCA***

```html
<p style="color: red">...</p>
```


## Reglas de CSS
Es un conjunto de propiedades para agregarle estilos a un elemento
```css
body {
   background-color: purple;
   font-family: sans-serif;
   text-align: center;
}
```

### Propiedades 
   - Tipografías
   - Fondos
   - Tamaños
   - Posicionamiento
   - Visualización
   - Comportamiento
   - Interfaz
   - Otros


## Selectores

### ID
Toma el elemento HTML que tenga el atributo **id** con el valor correspondiente

```html
<h3 id="saludo">¡Hola!</h3>
``` 

```css
#saludo { color: blue }
```

### Class
Toma el elemento HTML que tenga el atributo **class** con el valor correspondiente

```html
<h3 class="noticia destacada">Una noticia</h3>
```

```css
.noticia { font-size: 22px }
```

### Etiqueta
Toma el elemento HTML con esa etiqueta
```html
<p>Ad lorem ipsum dolor sit amet</p>
```

```css
p { color: gray }
```

###  Combinados


```html
<h2 class="subtitulo">Un subtítulo</h2>
```

```css
h2.subtitulo { color: yellow }
```

### Hijos

```html
<ul id="lista">
    <li>Primer ítem</li>
</ul>   
```

```css
ul#lista li { text-align: center }
```

****
>El CSS siempre va a priorizar a los selectores más específicos para aplicar los estilos.
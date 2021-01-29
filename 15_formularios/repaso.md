# Formularios

# Objetivos

- Configuración de los mensajes de error
- Formulario de registro o login
- Agregar algún contenido extra sobre accesibilidad

# Presentación de Formularios
[Presentación](presentacion.pdf)

## FORM
Esta etiqueta posee dos atributos: action y method. 
Cada uno cumple un objetivo particular:
    - **action** define la ruta en donde se va a procesar la información capturada.
    - **method** define cómo se enviará la información. 
    En la versión actual de HTML, hay solo dos valores posibles: GET y POST.

```html
<form action="/registro" method="POST">
   <!-- Aquí van los campos -->
</form>
```

## Input
Es un elemento multifunción. Cambiando el valor del atributo type, podemos obtener distintos tipos de campos. 
> Es importante saber que los elementos que no tengan name, no se envían.

```html
<form action="/registro" method="POST">
    <input type="text" name="usuario">
    <input type="password" name="clave">
    <input type="email" name="email">
    <input type="tel" name="telefono">
    <input type="number" name="edad">
</form>
```

## Label
Sirve para asociar un **texto descriptivo** a un campo determinado.

```html
<label for="nombre">Nombre:</label>
<input type="text" name="nombre" id="nombre">
```

## Textarea
El textarea nos permite texto de gran tamaño y con múltiples líneas.

>El textarea tiene etiqueta de apertura y cierre.

```html
<form action="/contact" method="POST">
    <label for="comentario">Deje su Comentario:</label>
    <textarea name="comentario" id="comentario">Contenido</textarea>
</form>

```

## Select
Este elemento nos permite agregar un componente que muestra opciones.

```html
<form action="/colors" method="GET">
    <label>Seleccione un color:</label>
    <select name="color">
        <option value="#ff0000" selected>Rojo</option>
        <option value="#00ff00">Verde</option>
        <option value="#0000ff">Azul</option>
        <option value="#770077">Morado</option>
    </select>
</form>
```

## Button
Nos permite generar un botón. Con la propiedad type definimos el tipo.
    - Tipo reset reinicia el formulario a su estado inicial.
    - Tipo submit se encarga de enviar el formulario.
    - Tipo button no realizará ninguna acción por defecto. (para ejecutar algo con js)
```html

<form action="" method="">
    <label for="usuario">Ingrese el usuario:</label>
    <input type="text" name="usuario">

    <button type="reset">Cancelar</button>
    <button type="submit">Enviar</button>
</form>
```
## Radio
Representa una opción para que el usuario elija **solo una**

```html
<input type="radio" name="medio-de-pago" value="Efectivo">
<input type="radio" name="medio-de-pago" value="Débito">
<input type="radio" name="medio-de-pago" value="Tarjeta" checked>

```


## Checkbox
```html
<input type="checkbox" name="hobbies" value="Música">
<input type="checkbox" name="hobbies" value="Pintura">
<input type="checkbox" name="hobbies" value="Juegos" checked>
```

### Caso particular checkbox
Si es solo un check (respuesta **si** o **no**)

```html
<label for="terminos">Acepto los términos.</label>
<input type="checkbox" name="terminos">
<!-- terminos llegará con el valor “on”. -->
```


## Fecha
Nos permite ingresar una fecha incluyendo año, mes y día.
```html
<input type="date" name="fecha" value="2021-07-22" min="2018-01-01" max="2022-12-31">
```

## Input de archivo
Nos permite cargar uno o más archivos desde la computadora.

```html
<label>Seleccionar una imagen para el perfil:</label>
<input type="file" name="avatar" accept=".jpg" multiple>
```

## Pseudoselectores
Las pseudo clases, que nos permiten aplicar estilos en función de:
    - Los estados de los elementos.
    - La ubicación dentro de la estructura de HTML.
    - La presencia de ciertos atributos de HTML.

## Pseudo Clases 
Las pseudo clases se agregan a los selectores que ya conocemos.
Normalmente escribiremos el nombre del selector primero, seguido de dos puntos : y la pseudo clase que queramos utilizar.Normalmente escribiremos el nombre del selector primero, seguido de dos puntos : y la pseudo clase que queramos utilizar.

### Enlaces
Los enlaces son uno de los elementos que tienen pseudo clases específicas.
En este caso serán :link , :visited, :hover y :active
```css
a:link,
a:visited {
    color: rgb(98, 8, 194);
    font-weight: bold;
}

a:hover,
a:active {
    color:rgb(136, 11, 74);
}
```

### Inputs
Los inputs son otro de los elementos que tienen pseudo clases específicas.
En este caso serán :focus , :enabled, :disabled y :target

```css
input:focus { border-color: orange; }

input:disabled { background-color: gray; }

:target { font-weight: bold; }
```

## Pseudo Elementos

Los pseudo elementos también se usan junto a los selectores de CSS.
Para usarlos, escribimos el nombre del selector primero, seguido de doble dos puntos :: y el pseudo elemento que queramos utilizar.

Los más utilizados son **::before **y **::after**, pero existen muchos más como **::first-letter **y **::first-line.******

```css
div::before {
    content: "Se muestra al principio";
    color: red;
}
   
div::after {
    content: "Se muestra al final";
    color: blue;
}
```


# Desafio 1 y 2
[Ver TODO](desafios.todo)

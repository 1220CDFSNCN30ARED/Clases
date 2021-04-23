# Manipulando elementos con JS

## Objetivos
- Comprender la interpretación que hace JavaScript del HTML.
- Poder modificar la vista usando JavaScript.

## Preguntas disparadoras

- ¿Cómo podemos realizar la vinculación entre nuestras vistas y nuestros archivos JavaScript?
- ¿Qué es el DOM?
- ¿Cuales son los selectores mas utilizados para lograr capturar elementos de nuestras vistas ?
- ¿Diferencia entre el innerHTML y el innerText ?
- ¿Cómo podemos agregar estilos y clases a nuestros elementos desde JavaScript ?   



## Ayudas

### Vinculación
```html
<body>
    <script>
       console.log(“Hola Mundo!”);
    </script>
</body>
```

```html
<body>
    <script src=“js/main.js”></script>
</body>
```

>Acuerdense de incluir siempre en el final de la pagina antes del body y si lo tienen que poner en el head, recuerden agregar el atributo defer para postergar la carga al final

[Más data](https://www.phpcentral.com/pregunta/992/cuales-son-las-mejores-practicas-para-incluir-codigo-javascript-y-css-en-nuestro-html)

Siempre en los scripts asegurarse de que la pagina esté cargada al ejecutar el js por eso ponemos window.onload siempre!
```js
window.onload = function(){
    // Nuestro código
}
```

### Selectores

#### .querySelector()
```js
let titulo = document.querySelector('.title');
// Nos va a retornar el primer elemento del HTML que contenga la clase “title”.
```

#### .querySelectorAll()

```js
let nombres=document.querySelectorAll('.name');
// Nos va a retornar un listado de elementos que coincidan con la búsqueda especificada.
```

#### .getElementById()

```js
let marca=document.getElementById('marca');
```

### Modificadores

#### .innerHtml()
Si queremos leer o modificar el contenido de una etiqueta HTML. 

```js
document.querySelector('div.nombre').innerHTML ;

```

#### innerText()
Si queremos leer o modificar el texto de una etiqueta HTML, vamos a utilizar esta propiedad.
```js
document.querySelector('div.nombre').innerText ;
```

#### Propiedad Style
Nos permite leer y sobreescribir las reglas CSS que se aplican sobre un elemento que hayamos seleccionado.
```js
let titulo = document.querySelector('.title');
titulo.style.color = 'cyan';
titulo.style.textAlign = 'center';
titulo.style.fontSize = '12px';
titulo.style.backgroundColor = '#dddddd';
```


#### classList.add()
Nos permite agregar una clase nueva al elemento que tengamos seleccionado.
```js
let cita = document.querySelector('.cita');
cita.classList.add('italicas');
```

#### classList.remove()
Nos permite quitarle una clase existente al elemento que tenemos seleccionado.

```js
let cita = document.querySelector('.cita');
cita.classList.remove('cita');
```

#### classList.toggle()
Revisa si existe una clase en el elemento seleccionado. De ser así, la remueve, de lo contrario, si la clase no existe, la agrega.
```js
let cita = document.querySelector('p');
cita.classList.toggle('cita');
```


#### classList.contains()
Nos permite preguntar si un elemento tiene una clase determinada. Devuelve un valor booleano.

```js
let cita = document.querySelector('.italicas');
cita.classList.contains('cita'); // false
```
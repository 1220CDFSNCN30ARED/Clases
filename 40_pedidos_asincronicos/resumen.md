# Pedidos Asincrónicos y localStorage

## Objetivos
- Comprender cómo se consume una API Rest desde el frontend.
- Repasar como se manipula el DOM con JS
- Practicar Web storage.

## Fetch 

### Get
```js
fetch("https://restcountries.eu/rest/v2/")
.then(function(response){
   return response.json();
})
.then(function(data){
   console.log(data)
})
.catch(function(error){
   console.error(error)
})

```
### Post
```js
fetch("https://localhost:3001/movies",{
    method: 'POST',
    headers: {
        Content-Type: 'application/json'
    },
    body: JSON.stringify(data)
})
.then(function(response){
   return response.json();
})
.then(function(response){
   console.log(response)
})
.catch(function(error){
   console.error(error)
})
```


## Oject Location

### Location href
```js
console.log(location.href); // devuelve la url

location.href = "https://google.com" // Redirecciona a una url
```

### Location reload
```js
location.reload() // Recarga la página
```


## Query String
```js
let query = new URLSearchParams(location.search);
if(query.has('search_query')){
  let search = query.get('search_query');
  console.log(search)
};

```

## localStorage y sessionStorage
Las dos funmciones son lo mismo, la única diferencia es que sessionStorage se borra al cerrar el navegador y localStorage permanece indefinidamente

```js
localStorage.clear(); // borrra el contenido completo

localStorage.setItem('key', 'value'); // Setea un valor 

localStorage.getItem('key') // Devuelve un valor
localStorage.key // también devuelve el valor

localStorage.removeItem('key'); // Elimina un valor

/* Si guardamos un objeto no olvidar JSON.stringify() */
let carrito = [
    {
        nombre:'Mi producto',
        cantidad: 2,
        precio:100
    }
]
// al guardar
localStorage.setItem('carrito', JSON.stringify(carrito))

// al recuperar 
let carritoLocalStorage = JSON.parse(localStorage.carrito);
```


## Ejercitacion
- Para el back el código les debe resultar familiar ya que son las Api que se codificaron en clases anteriores.
- Se corre npm install para el back y se lo ejecutan para que verifiquen que está todo correcto.
- En el back solo están los controladores y las rutas, ya que el objetivo es armar la ui independiente con el back.
- Correr el proyecto del backend y verificar el puerto dónde está el mismo.
- Para el front analizar los diferentes archivos que nos proveen. (html, js, css)
- Primer paso en el archivo main.js debemos agregar el fetch que nos permita traernos los datos del endpoint del listado de películas, para mostrar los datos en el archivo home.html.
- Segundo paso en el archivo formulario.js debemos agregar la lógica necesaria para mostrar los datos en el formulario.html y permitir que se pueda eliminar/crear/ modificar datos.
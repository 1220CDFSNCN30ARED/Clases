# Objetos Literales
Podemos decir que los objetos literales son la representación en código de un elemento de la vida real.

Un objeto es una estructura de datos que puede contener **propiedades** y **métodos**.

## this
La palabra reservada this hace referencia al objeto en sí donde estamos parados. Es decir, el objeto en sí donde escribimos la palabra.

```js
var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    energia: 100,
    saludar: function () {
        // Accedemos a la propiedad "nombre" de ESTE objeto con la palabra reservada THIS
        return "¡Hola! Mi nombre es " + this.nombre;
    },
    entrenar(horas){
        this.energia = this.energia -(horas * 2) 
    }
}
console.log(tenista.nombre) // muestra el nombre
console.log(tenista.saludar()) // ejecuta la funcion saludar
```

## Funciones constructoras
avaScript nos da una opción más para crear un objeto, a través del uso de una función constructora.

```js
function Auto(marca, modelo){
	this.marca = marca;
	this.modelo = modelo;
};
```

## Instanciar un objeto
```js
let miAuto = new Auto('Ford', 'Falcon');
```


## PLAYGROUND

Ej.1

```js
let perro = {
    nombre: 'santiago',
    edad: 34,
    vacunado: true
}
```

Ej.2
```js
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        this.energia = this.energia - horas*5;
        this.experiencia = this.experiencia + horas*2
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

```
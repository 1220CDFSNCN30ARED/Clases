# Ciclos
Los ciclos nos permiten repetir instrucciones de manera sencilla. 
## For
```js
for (let vuelta = 1; vuelta <= 5; vuelta++) {
  console.log('Dando la vuelta número ' + vuelta);
};

```
## Playground
Ejercicio 1
```js
function loro (text)  {
    for(i = 0; i < 5; i++){
        console.log(text)
    }
}
```

Ejercicio 2
```js
function noParesDeContarImparesHasta(numero){
    let impares = 0;
    for(let i = 0; i <= numero; i++) {
        if (i % 2 != 0) {
            impares++
        }
    }
    return impares;
}

let impares = noParesDeContarImparesHasta(12)
console.log(impares)
```

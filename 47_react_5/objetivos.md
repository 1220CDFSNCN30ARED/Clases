# Hooks



## Objetivos
- Entender la diferencia entre el estado de un componente de clase y el hook useState()
- Entender la diferencia entre los métodos del ciclo de vida y el useEffect()
- Entender la diferencia entre usar el querySelector() el hook useRef()
- Comprender que estos 3 hooks nos permiten tener todas las funcionalidades de un componente de clase, dentro de un componente funcional


## Ayudas

### useState

```js
import React, { useState } from 'react';
function Frutas (){
    const [listadoDeFrutas, setListadoDeFrutas] = useState(["Manzana", "Pera", "Banana"]);
    const agregarFrutas = () => setListadoDeFrutas([
        ...listadoDeFrutas,
        "Naranja", "Uva", "Sandía"
    ])
    return (
        <div>
            <h2>Soy el componente FRUTAS</h2>
            {
            listadoDeFrutas.map((fruta, i) => {
                return <li key={i}>{fruta}</li>
            })
            }

            <button onClick={ agregarFrutas }>
                Añadir más frutas
            </button>
        </div>
    )
}
 
export default Frutas;
```


### useEffect()

Metodo para ejecutar cuando se monta el componente (alias componentDidMount)
```js
useEffect(() => {
  console.log('Se ejecuta solo al montarse el componente');
}, [])

```

Metodo que se ejecuta cuando uno o varios estados cambian (alias componentDidUpdate)

```js
useEffect(() => {
  console.log('Al cambiar cualquiera de estos estados, se ejecutará este código');
}, [miEstado, miOtroEstado, otroEstadoMas])

```

Metodo que se ejecuta cuanndo el componente se desmonta (alias componentWillUnmount)
```js
useEffect(() => {
  return () => {
    console.log('Se desmontó el componente');
  }
}, [])

```


### useRef

```js
import { useRef } from 'react';

let elTitulo = useRef();

function Componente() {
    cambiarColor = () => {
        elTitulo.current.style.color = "red";
    }
    return  (
        <div>
            <h1 ref={elTitulo}>Lorem ipsum</h1>
            <button onCLick={cambiarColor}>Cambiar Color</button>
        </div>
    )
}
export default Componente;
```


## Ejercitación

OMDB key: 1e5a7b6f

[OMDb API](http://www.omdbapi.com/?i=tt3896198&apikey=1e5a7b6f)
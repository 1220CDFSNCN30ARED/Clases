# React 3 - Ciclo de vida de componentes

## Objetivos
- Crear componentes con estado.
- Trabajar con los métodos de ciclo de vida de componente.
- Lograr la integración entre una aplicación con React y nuestras APIs en el backend. 
- Crear eventos a través de métodos los cuales realizaran operaciones cuando el usuario interactúe con el componente.


## Preguntas 
- ¿Ventajas de usar los componentes con estado?
- ¿Formas como podemos integrar nuestra aplicación de React con nuestro backend?
- ¿Por qué, puede resultar de utilidad controlar el ciclo de vida de un componente?
- ¿Cual es la utilidad de crear eventos que actúen de acuerdo al evento configurado?

## Componente Statefull
```js

import React, { Component } from 'react';


class Componente extends Component {
    constructor(props) {
        super(props);
        this.state = {  }   
    }
    render() { 
        return (  );
    }
}
 
export default Componente;

```
## Snippets

Snippets
- imr	Import React
- imrc	Import React / Component
- imrs	Import React / useState
- imrse	Import React / useState useEffect
- impt	Import PropTypes
- impc	Import React / PureComponent
- cc	Class Component
- ccc	Class Component With Constructor
- cpc	Class Pure Component
- sfc	Stateless Function Component
- cdm	componentDidMount
- uef	useEffect Hook
- cwm	componentWillMount
- cwrp	componentWillReceiveProps
- gds	getDerivedStateFromProps
- scu	shouldComponentUpdate
- cwu	componentWillUpdate
- cdu	componentDidUpdate
- cwu	componentWillUpdate
- cdc	componentDidCatch
- gsbu	getSnapshotBeforeUpdate
- ss	setState
- ssf	Functional setState
- usf	Declare a new state variable using State Hook
- ren	render
- rprop	Render Prop
- hoc	Higher Order Component
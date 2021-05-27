# React 4 - Enlazando los componentes de la aplicación

## Objetivos
- Aprender a instalar la librería React Router Dom
- Comprender cómo podemos utilizar React Router Dom para renderizar nuestros componentes.
- Diferenciar los diferentes componentes y sus usos que nos brinda la librería React Router Dom


## Ayudas
```
npm install react-router-dom
```

### Componentes mas utilizados de react-router-dom
```js
import {BrowserRouter,NavLink, Link, Route, Switch} from 'react-router-dom'
```

### Browser Router
```js
ReactDOM.render(
 <BrowserRouter>
   <App />
 </BrowserRouter>,
 document.getElementById("root")
);

```

### Componentes a renderizar en la ruta
```js
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';


<Route path="/about" exact={true} component={About}/>
<Route path="/contact" exact={true} component={Contact}/>
<Route path="/" exact={true} component={Home}/>
```

### Links
```js
<NavLink  exact to="/">Home</NavLink>
<NavLink  to="/about">About</NavLink>
<NavLink  to="/contact">Contact</NavLink>
```

### Switch 
```js
<Switch>
    <Route path="/nosotros">
       <Nosotros />
    </Route>
    <Route path="/contacto">
       <Contacto />
    </Route>
    <Route path="/">
       <Inicio />
    </Route>
</Switch>

```

### props.match

```js
<Route path="/usuarios/:id" component={Usuarios} />


function Componente (props){
   const id =  props.match.params.id;

   fetch(`api/users/${props.match.params.id}`)
    return(
       <div></div>
   )
}
export default Componente

```

## Para saber mas

[Primary Components](https://reactrouter.com/web/guides/primary-components)
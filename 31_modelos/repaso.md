# Modelos y consultas básicas

## Objetivos

- Configurar un proyecto con una base de datos por detrás utilizando el ecosistema de paquetes de Sequelize
- Afirmar de forma práctica y teórica los conceptos de la capa de modelo en un sistema MVC pudiendo entender para qué sirve y cómo se escribe junto con qué recaudos y detalles son importantes.
- Realizar prácticas para ejercitar sobre la lectura de datos de una base de datos MySQL pudiendo configurar la recuperación de esos datos mediante el paquete Sequelize.

## Repaso
- ¿Qué resuelven las promesas? ¿Para qué sirve el .then?
- ¿Qué es un ORM? ¿Qué problemática resuelve?
- ¿Para qué necesitamos los modelos? ¿Qué recaudos hay que tener?
- ¿Qué hacemos en un controlador si necesitamos datos de la base de datos?
- ¿Qué métodos conocemos que nos provee sequelize?
- ¿Qué configuraciones podemos realizar al hacer una consulta de lectura con Sequelize?
- ¿Qué pasa cuando necesito un filtro where?


## Instalación Sequelize

### Paso 1.- Requerir paquetes

```
npm install sequelize-cli -g
npm install sequelize
npm install mysql2
```

### Paso 2.- Crear Arhivo .sequelizerc

```js
const path = require('path')
module.exports = {
    config: path.resolve('./src/database/config', 'config.js'),
    'models-path': path.resolve('./src/database/models'),
    'seeders-path': path.resolve('./src/database/seeders'),
    'migrations-path': path.resolve('./src/database/migrations'),
}
```

### Paso 3.- Inicializar Sequelize

```
Sequelize init
```

### Paso 4.- Exportar config como modulo y configurar variables de entorno

Deberia quedar algo asi:
```js
module.exports = {
  "development": {
    "username": 'root',
    "password": 'root',
    "database": 'movies_db',
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## Modelos

Acá les dejo como sería un modelo base

```js
module.exports = (sequelize, DataTypes) => {
    let alias = 'Movies';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:dataTypes.STRING,
        rating: dataTypes.INTEGER,
        release_date: dataTypes.DATE
    };
    let options = {
        tableName: 'movies',
        timestamps: false
    }
    const Movie = sequelize.define(alias,cols,options);
    return Movie;
}

```
### DataTypes
Pueden consultar los datatypes aca: [DataTypes](https://sequelize.org/master/manual/model-basics.html#data-types)

## Consultas

### findAll()

```js
const db = 
db.Movies.findAll().then( respuesta =>{
    res.render('moviesList',{movies:respuesta})
});
```

### findByPk()

```js
const db = require('../database/models');

db.Movies.findByPk(req.params.id).then(respuesta => {
    res.render('moviesDetail',{movie:respuesta})
})
```

### findOne()
Devuelve la primera ocurrencia

```js
db.Movies.findOne({
    where:{
        name: {[db.Sequelize.Op.like]:'%Harry%'}
    }
}).then(respuesta => {
    res.render('moviesDetail',{movie:respuesta})
})
```

### Where, Order, Limit
```js
db.Movie.findAll({
    where: {
        rating: {[db.Sequelize.Op.gte] : 8}
    },
    order: [
        ['rating', 'DESC']
    ],
    limit:20
})
.then(movies => {
    res.render('filteredMovies.ejs', {movies});
});
```

### Operators
Pueden consultar los operadores acá: [Operators](https://sequelize.org/master/manual/model-querying-basics.html#operators)
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const mainRouter = require('./routes/mainRoutes');

app.use('/', mainRouter);

app.listen(3000, () => console.log('Servidor andando en puerto 3000'));
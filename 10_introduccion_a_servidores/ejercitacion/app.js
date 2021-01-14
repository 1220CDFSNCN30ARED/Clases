const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/hamilton',(req,res) => {
    res.sendFile(path.resolve('./views/hamilton.html'));
});

app.get('/turing',(req,res) => {
    res.sendFile(path.resolve('./views/turing.html'));
});

app.get('/clarke',(req,res) => {
    res.sendFile(path.resolve('./views/clarke.html'));
});


app.listen(8000, () => console.log('servidor en puerto 8000'));



const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.send('productos de las rutas productos');
});
router.get('/un-producto',(req,res) => {
    res.send('vista de un producto');
});

module.exports = router;
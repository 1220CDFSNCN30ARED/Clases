var express = require('express');
var router = express.Router();
var indexController = require ('../controllers/indexControllers');
const {body} = require('express-validator');

/*Armado de validaciones*/
const validaciones = [
    body('name').notEmpty().withMessage('Debes completar tu nombre'),
    body('email').isEmail().withMessage('Debes ingresar un Email válido'),
    body('color').notEmpty().withMessage('Debes seleccionar un color'),
    body('edad').isInt().withMessage('La edad debe ser numerica'),
]

/* GET home page. */
router.get('/', indexController.index); 
router.post('/', validaciones ,indexController.create); 

module.exports = router;

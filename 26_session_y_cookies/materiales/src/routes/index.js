var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);
router.post('/', controller.store);

module.exports = router;

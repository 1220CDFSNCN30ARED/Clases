const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const adminMiddleware = require('../middlewares/admin');
router.get('/', mainController.index);
router.get('/admin', adminMiddleware, mainController.admin);

module.exports = router;
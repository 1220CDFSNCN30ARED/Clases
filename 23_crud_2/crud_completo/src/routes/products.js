// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
// ************ Controller Require ************
const productsController = require('../controllers/productsController');


// Multer
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, './public/images/products'); 
  }, 
  filename: function (req, file, cb) { 
     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);  
  } 
})




// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/images/')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

var upload = multer({ storage: storage })


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', upload.single('image'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id', upload.single('image'), productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;

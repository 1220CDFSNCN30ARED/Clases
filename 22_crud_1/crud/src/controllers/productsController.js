const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('product',{products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(product => product.id == req.params.id);
		res.render('detail',{product,toThousand})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// aca empieza la magia
		res.send('Producto Guardado');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productToEdit = products.find(product => product.id == req.params.id);
		res.render('product-edit-form',{productToEdit});
	},
	// Update - Method to update
	update: (req, res) => {
		res.send('Producto Editado');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.send('Producto eliminado');
	}
};

module.exports = controller;
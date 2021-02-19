const fs = require('fs');
let users = fs.readFileSync('./data/users.json', 'utf-8');
users = JSON.parse(users);

const mainController = {
	index: (req, res) => {
		res.render('index', { users });
	}
}

module.exports = mainController;
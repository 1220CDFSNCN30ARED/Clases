const fs = require('fs');
let texto = fs.readFileSync(__dirname + '/texto.txt','utf-8');

module.exports = texto;
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'../logs/UserLogs.txt')
module.exports = (req,res,next) => {
    fs.appendFileSync(filePath,'El usuario ingresó a la ruta: ' + req.url + '\n')
    next()
}
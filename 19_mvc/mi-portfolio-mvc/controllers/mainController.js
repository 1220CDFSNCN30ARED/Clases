const path = require('path');

const mainController = {
    index: (req,res) => {
        // console.log(path.resolve('views/home.html'));
        // console.log(path.join(__dirname,'../views','home.html'));
        // console.log(path.resolve('./views/home.html'));
        // console.log(path.resolve('../views/home.html'));
        res.sendFile(path.resolve('views/home.html'));
    },
    contacto: (req,res) => {
        res.send('contacto');
    },
    about: (req,res) => {
        res.sendFile(path.resolve('views/about.html'));
    }
}

module.exports = mainController
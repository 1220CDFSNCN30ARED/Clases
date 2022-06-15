const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    if(req.session.name){
      res.render("index", { data: req.session });
    } else {      
      res.render("index");
    }
  },
  create: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      req.session.name = req.body.name;
      req.session.email = req.body.email;
      req.session.color = req.body.color;
      req.session.edad = req.body.edad;
      if (req.body.recordar_color) {
        res.cookie("color", req.body.color, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });
      }
      res.redirect("/");
    } else {
      res.render("index", { errors: errors.errors });
    }
  },
};

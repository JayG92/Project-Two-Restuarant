var db = require("../models");
var passport = require("../config/passport");


module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
    
    
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  app.get("/a", function (req, res) {
    db.menu.findAll({}).then(function (results) {
      // results are available to us inside the .then
      res.json(results);
    });
  })

  app.get("/featured", function (req, res) {
    db.menu.findAll({
      where: {
        tag: "featured"
      }
    }).then(function (result) {
      return res.json(result);
    });
  })

  app.get("/starters", function (req, res) {
    db.menu.findAll({
      where: {
        tag: "starters"
      }
    }).then(function (result) {
      return res.json(result);
    });
  })

  app.get("/salads-soups", function (req, res) {
    db.menu.findAll({
      where: {
        tag: "salads&soups"
      }
    }).then(function (result) {
      return res.json(result);
    });
  })

  app.get("/steaks", function (req, res) {
    db.menu.findAll({
      where: {
        tag: "steaks"
      }
    }).then(function (result) {
      return res.json(result);
    });
  })

  app.get("/sides", function (req, res) {
    db.menu.findAll({
      where: {
        tag: "sides"
      }
    }).then(function (result) {
      return res.json(result);
    });
  })

  app.get("/desserts", function (req, res) {
    db.menu.findAll({
      where: {
        tag: "desserts"
      }
    }).then(function (result) {
      return res.json(result);
    });
  })

app.post("/reservations", function (req, res) {
  db.reservations.create({
    name: req.body.name,
    phone: req.body.phone,
    party: req.body.party,
    message: req.body.message,
  }).then(function() {
    // res.redirect(307, "/reservations");
  })
})

};


var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/menu", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/menu.html"));
  });
  app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/reservations.html"));
  });
  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });

  app.get("/rewards", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/rewards.html"));
  });

  app.get("/order", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/order.html"));
  });
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });
  app.get("/members", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/members.html"));
  });
  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};

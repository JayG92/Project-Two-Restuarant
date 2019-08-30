var db = require("../models");

module.exports = function (app) {
  app.get("/a", function (req, res) {
    db.menu.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  })

  app.get("/featured", function (req, res) {
  db.menu.findAll({
    where: {
      tag: "featured"
    }
  }).then(function(result) {
    return res.json(result);
  });
})

app.get("/starters", function (req, res) {
  db.menu.findAll({
    where: {
      tag: "starters"
    }
  }).then(function(result) {
    return res.json(result);
  });
})

app.get("/salads-soups", function (req, res) {
  db.menu.findAll({
    where: {
      tag: "salads&soups"
    }
  }).then(function(result) {
    return res.json(result);
  });
})

app.get("/steaks", function (req, res) {
  db.menu.findAll({
    where: {
      tag: "steaks"
    }
  }).then(function(result) {
    return res.json(result);
  });
})

app.get("/sides", function (req, res) {
  db.menu.findAll({
    where: {
      tag: "sides"
    }
  }).then(function(result) {
    return res.json(result);
  });
})

app.get("/desserts", function (req, res) {
  db.menu.findAll({
    where: {
      tag: "desserts"
    }
  }).then(function(result) {
    return res.json(result);
  });
})



  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};

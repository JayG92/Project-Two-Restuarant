require("dotenv").config();
var express = require("express");
var mysql = require("mysql");
var Sequelize = require("sequelize");

var db = require("./models");

var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// MYSQL
// var con = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "project_two"
// });

var sequelize = new Sequelize("sequelize_menu", "root", "root", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});



// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
// module.exports = con;
module.exports = sequelize;

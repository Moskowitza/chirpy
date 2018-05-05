// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

  // Get all chirps

  app.get("/api/chirps", function (req, res) {
    connection.query("SELECT * FROM ?", [chirps], function (err, result) {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  });
  // Add a chirp
  app.post("/api/chirps", function (req, res) {
    connection.query("INSERT INTO chirps (author, chirp) VALUES (?, ?)", function(err, result) {
      if (err) {
        throw err;
      }
      res.redirect("/");  
    });
  });
};

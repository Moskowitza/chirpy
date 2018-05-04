// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps

  app.get("/api/chirps", function(req, res) {
    res.json(chirpData);
  });
  // Add a chirp
  app.post("/api/chirps", function(req, res) {
    chirpData.push(req.body);
  });
};

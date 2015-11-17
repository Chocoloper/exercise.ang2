var express = require('express');

var routes = express.Router();

routes.get('/hello', function(req, res) {
  res.send("Cool");
});

module.exports = routes;

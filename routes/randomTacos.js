var express = require('express');
var router = express.Router();


var Tacos = require('../models/tacos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('randomTacos', {});
});

module.exports = router;
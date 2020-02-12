var express = require('express');
var router = express.Router();

//Import schema
var Tacos = require('../models/tacos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('mesTacos', {});
});

router.get('/getAll', function(req, res, next) {

  const username = req.query.username;

  Promise.all([
    Tacos.find({ username: username }).exec()
  ])
  .then(function(data) {
    var tacos = data[0];
    console.log(tacos);
  });

});

module.exports = router;
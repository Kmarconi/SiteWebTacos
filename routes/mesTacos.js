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

  if(!username) {
    res.send("Missing arguments !!");
  }

  Promise.all([
    Tacos.find({ user: username }).exec()
  ])
  .then(function(data) {
    var tacos = data[0];
    res.send(tacos);
  })
  .catch(function(err){
    res.send("error");
  });

});

module.exports = router;
var express = require('express');
var router = express.Router();
var crypto = require('crypto');

//Import schema
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('signin', {});
});

router.get('/verify', function(req, res, next) {

  const username = req.query.username;
  const pwd = req.query.password;

  if(false) {
    res.send("non");
  }

  res.send("oui");

})

module.exports = router;
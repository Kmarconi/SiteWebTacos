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

  if(!username || !pwd) {
      res.send("Missing arguments !!");
  }

  Promise.all([
    User.findOne({ username: username }).exec()
  ])
  .then(function(data) {

    const user = data[0];

    if(!user) {
      res.send("refused");
    }
      
    const password = crypto.createHash('sha512').update(pwd + user.salt).digest('base64');
  
    if(password == user.password) {
      res.send("accepted");
    }
  
    res.send("refused");
  })
  .catch(function(err){
    res.send("refused (error)");
  });


})

module.exports = router;
var express = require('express');
var router = express.Router();
//Import schema
var User = require('../app');
var number = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
  const name = req.body.name;
  if(!name) {
    res.status(204).send();
  }
  const user = new User({
    number: number,
    name: name
  });
  number++;
  user.save();
  console.log("User saved in MongoDB : " + JSON.stringify(user));
  res.status(204).send();
});
router.get('/get', function(req, res, next) {
  const nb = req.query.number;
  if(!nb) {
    res.status(204).send();
  }
  User.find({number: nb}, function(err, users) {
    console.log(users);
    res.render('users', {title: "users", number: number, users: users});
  });
});

router.get('/getAll', function(req, res, next) {
  User.find({}, function(err, users) {
    res.send(users);
  });
});
router.post('*', function(req, res) {  res.render('error',{message:"Page not found",error:"Oui"});});


module.exports = router;

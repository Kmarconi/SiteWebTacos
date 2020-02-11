var express = require('express');
var router = express.Router();
var crypto = require('crypto');

//Import schema
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup', {});
});

router.post('/register', function(req, res, next){
    const username = req.body.username;
    const pwd = req.body.password;

    if(!username || !pwd) {
        res.send("Missing arguments !!");
    }

    const salt = crypto.randomBytes(16);
    
    const password = crypto.createHash('sha512').update(pwd + salt).digest('base64');

    const user = new User({
        salt: salt,
        username: username,
        password: password
    });

    user.save();
    //window.location.href='index'
    //console.log(res.location())
    res.redirect('../index')
    //res.status(204).send();
    //res.render('index',{ title: 'Express' });
});

module.exports = router;
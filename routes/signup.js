var express = require('express');
var router = express.Router();
var crypto = require('crypto');

//Import schema
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.render('signup', {});
});

router.post('/register', function(req, res, next){

    const username = req.body.username;
    const pwd = req.body.password;

    if(!username || !pwd) {
        res.send("Missing arguments !!");
    }
    
    Promise.all([
        User.findOne({ username: username }).exec()
    ])
    .then(function(data) {

        const user = data[0];
        if(user) {
            res.send("refused (user already exists)");
        }
        else {
            const salt = crypto.randomBytes(16);
            const password = crypto.createHash('sha512').update(pwd + salt).digest('base64');
                
            const userToAdd = new User({
                salt: salt,
                username: username,
                password: password
            });
        
            userToAdd.save();
            res.send("accepted");
        }
        
    })
    .catch(function(err){
        res.send("refused (error)");
    });
});

module.exports = router;
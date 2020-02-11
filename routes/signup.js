var express = require('express');
var router = express.Router();
var crypto = require('crypto');

//Import schema
var User = require('../models/user');

router.get('/', function(req, res, next) {

    const username = req.query.username;
    const pwd = req.query.password;

    if(!username || !pwd) {
        res.send("Missing arguments !!");
    }

    const salt = crypto.randomBytes(16);
    
    const password = crypto.createHash('sha256').update(pwd + salt).digest('base64');

    const user = new User({
        salt: salt,
        username: username,
        password: password
    });

    user.save();

    res.status(204).send();
});


module.exports = router;
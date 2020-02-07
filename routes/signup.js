var express = require('express');
var router = express.Router();
var crypto = require('crypto');

//Import schema
var User = require('../app');

router.get('/', function(req, res, next) {

    const username = req.query.username;
    const password = crypto.createHash('sha256').update(req.query.password).digest('base64');

    const user = new User({
        username: username,
        password: password
    });

    user.save();

});

module.exports = router;
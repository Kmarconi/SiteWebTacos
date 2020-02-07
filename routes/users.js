var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.send('respond with a resource');
});

module.exports = router;

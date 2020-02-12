var express = require('express');
var router = express.Router();

//Import schema
var Tacos = require('../models/tacos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('CreationTacos', {});
});

router.post('/add', function(req, res, next) {
  const stringTacos = req.body.jsonTacos;
  console.log(stringTacos);
  var jsonTacos = JSON.parse(stringTacos);

  const tacos = new Tacos({
    user: jsonTacos.user,
    taille: jsonTacos.taille,
    viandes: jsonTacos.viandes,
    sauces: jsonTacos.sauces,
    suppléments: jsonTacos.supplements,
    prix: jsonTacos.prix,
    note: jsonTacos.note
  });

  tacos.save();
});
module.exports = router;

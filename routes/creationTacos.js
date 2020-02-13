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

  if(!stringTacos) {
    res.send("Missing arguments !!");
  }

  var jsonTacos = JSON.parse(stringTacos);
  
  Promise.all([
    Tacos.find({}).sort({id : -1}).limit(1).exec()
  ])
  .then(function(data) {

    console.log(data[0]);

    const lastId = data[0][0].id + 1;

    const tacos = new Tacos({
      id: lastId,
      user: jsonTacos.user,
      taille: jsonTacos.taille,
      viandes: jsonTacos.viandes,
      sauces: jsonTacos.sauces,
      suppléments: jsonTacos.supplements,
      prix: jsonTacos.prix,
      note: jsonTacos.note
    });
  
    tacos.save();
  })
  .catch(function(err){
    console.log(err);
    res.send(err);
  });
});
module.exports = router;

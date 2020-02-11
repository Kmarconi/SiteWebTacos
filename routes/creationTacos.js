var express = require('express');
var router = express.Router();

//Import schema
var Tacos = require('../models/tacos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.render('CreationTacos', {});
});

router.get('/add', function(req, res, next) {
  const taille = req.query.taille;
  const viandes = req.query.viandes;
  const sauces = req.query.sauces;
  const supplements = req.query.supplements;
  const prix = req.query.prix;
  const note = req.query.note;

  if(!taille || !viandes || !sauces || supplements || !prix || !note) {
    res.send("Missing arguments !!");
  }

  const tacos = new Tacos({
    taille: taille,
    viandes: viandes,
    sauces: sauces,
    supplements: supplements,
    prix: prix,
    note: note
  });

  tacos.save();
  res.status(204).send();
});
module.exports = router;

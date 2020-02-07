var express = require('express');
var router = express.Router();

router.get('/tailles', function(req, res, next) {
  res.send('{"Tailles": [ { "Nom": "M", "Prix": "5", "NbGalettes": 1, "NbViandes" : 1 }, { "Nom": "L", "Prix": "6", "NbGalettes": 1, "NbViandes" : 2 }, { "Nom": "XL", "Prix": "9", "NbGalettes": 2, "NbViandes" : 3 }, { "Nom": "XXL", "Prix": "14", "NbGalettes": 3, "NbViandes" : 4 }, { "Nom": "Giga", "Prix": "22", "NbGalettes": 5, "NbViandes" : 5 } ] }')
});

router.get('/viandes', function(req, res, next) {
  res.send('{ "Viandes": [ { "Nom": "Tenders", "Prix": 1, "PathImages": "to be defined"},{ "Nom": "Viande Hachée", "PathImages": "to be defined"},{ "Nom": "Cordon Bleu", "PathImages": "to be defined"},{ "Nom": "Nuggets", "PathImages": "to be defined"},{ "Nom": "Merguez", "PathImages": "to be defined"},{ "Nom": "Filet de Poulet", "PathImages": "to be defined"},{ "Nom": "Filet de Poulet Mariné", "PathImages": "to be defined"},{ "Nom": "Falafel", "PathImages": "to be defined"}]}')
});

router.get('/sauces', function(req, res, next) {
  res.send('{ "Sauces": [ { "Nom": "Algérienne", "PathImages": "to be defined" }, { "Nom": "Barbecue", "PathImages": "to be defined" }, { "Nom": "Burger", "PathImages": "to be defined" }, { "Nom": "Chili Thai", "PathImages": "to be defined" }, { "Nom": "Curry", "PathImages": "to be defined" }, { "Nom": "Harissa", "PathImages": "to be defined" }, { "Nom": "Ketchup", "PathImages": "to be defined" }, { "Nom": "Mayonnaise", "PathImages": "to be defined" }, { "Nom": "Samourai", "PathImages": "to be defined" }, { "Nom": "Texane Pepper", "PathImages": "to be defined" }, { "Nom": "FUEGO", "PathImages": "to be defined" }, { "Nom": "Tabasco", "PathImages": "to be defined" }, { "Nom": "Biggy", "PathImages": "to be defined" } ]}')
});

router.get('/supplements', function(req, res, next) {
  res.send('{ "Suppléments": [ { "Nom": "Emmental", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Gouda", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Cheddar", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Raclette", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Boursin", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Chèvre", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Mozzarella", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Vache qui Rit", "Prix": 0.5, "PathImages": "to be defined" }, { "Nom": "Poivronnade", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Poulet", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Boeuf façon Bacon Fumé", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Jalapeño & Cheese Nuggets", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Oignons Caramélisés", "Prix": 0.9, "PathImages": "to be defined" }, { "Nom": "Lardons de Volailles", "Prix": 0.9, "PathImages": "to be defined" } ]}')
});

module.exports = router;

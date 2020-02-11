var mongoose = require('mongoose');

var TacosSchema = new mongoose.Schema({
    Taille: String,
    Viandes: [String],
    Sauces: [String],
    Suppléments: [String],
    Prix: Number,
    Note: Number
});

module.exports =  mongoose.model('Tacos', TacosSchema);
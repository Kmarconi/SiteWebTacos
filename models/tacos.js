var mongoose = require('mongoose');

var TacosSchema = new mongoose.Schema({
    id: Number,
    user: String,
    taille: String,
    viandes: [String],
    sauces: [String],
    suppléments: [String],
    prix: Number,
    note: Number
});

module.exports =  mongoose.model('Tacos', TacosSchema);
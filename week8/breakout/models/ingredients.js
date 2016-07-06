var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
	name 				: String,
	type                : String,
	ppu					: Number,
	unit				: String
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
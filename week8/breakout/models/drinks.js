var mongoose = require('mongoose');

var drinkSchema = mongoose.Schema({
	name 				: String,
	// Ingredients will come from another model
	ingredients 		: Array,
	shaken 				: Boolean,
	wellDrink   		: Boolean,
	price       		: Number,
	// customersAlsoBought : 
});

module.exports = mongoose.model('Drink', drinkSchema);
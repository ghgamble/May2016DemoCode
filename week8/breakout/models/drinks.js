var mongoose = require('mongoose');

var drinkSchema = mongoose.Schema({
	name 				: String,
	// Ingredients will come from another model
	ingredients 		: [
		{
			qty : Number,
			ing : {
				type : mongoose.Schema.ObjectId,
				ref  : 'Ingredient'
			}
		}
	],
	shaken 				: Boolean,
	wellDrink   		: Boolean,
	price       		: Number,
	// customersAlsoBought : 
});

module.exports = mongoose.model('Drink', drinkSchema);
// Require our model so we can interact with the DB
var Drink = require('../models/drinks')

function priceCalc (drinks){
	drinks.forEach(function(drink){
		var price = 0;
		drink.ingredients.forEach(function(ingredient){
			price += (ingredient.qty * ingredient.ing.ppu)
		})
		console.log(drink.name + ' : ', price)
	})
}

// Export so we can access methods in app.js
module.exports = {
	get : function(req, res){
		// R

		if(req.params.id){
			// Get ONE
			Drink.findOne({_id : req.params.id})
				.populate('ingredients.ing')
				.exec(function(err, drink){
					priceCalc([drink])
					res.send(drink)
				})
		}
		else{
			// Get ALL/MANY
			Drink.find({})
				.populate('ingredients.ing')
				.exec(function(err, drinks){

					priceCalc(drinks)

					res.send(drinks)
				})
		}

	},
	upsert : function(req, res){
		// C, U
	},
	delete : function(req, res){
		// D
	}

}

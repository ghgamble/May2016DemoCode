var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/drinks')

var Drink = require('../models/drinks')
var Ingredient = require('../models/ingredients')

// var ingredientList = [
	
// 	{
// 		name : 'Whiskey',
// 		type : 'Alcohol',
// 		ppu  : 3.50,
// 		unit : 'oz',
// 	},
// 	{
// 		name : 'Simple Syrup',
// 		type : 'Mixer',
// 		ppu  : 0.50,
// 		unit : 'oz',
// 	},
// 	{
// 		name : 'Cherry',
// 		type : 'Garnish',
// 		ppu  : 0.75,
// 		unit : 'pc',
// 	},
// 	{
// 		name : 'Vodka',
// 		type : 'Alcohol',
// 		ppu  : 2.75,
// 		unit : 'oz',
// 	},
// 	{
// 		name : 'Tonic Water',
// 		type : 'Mixer',
// 		ppu  : 1.00,
// 		unit : 'oz',
// 	},

// ]
// ingredientList.forEach(function(ingredient){
// 	var ingObj = new Ingredient(ingredient)
// 	ingObj.save()
// })









// var drinkList = [
// 	{
// 		name		: 'Old Fashioned',
// 		shaken		: false,
// 		wellDrink	: false,
// 		ingredients : [
// 			{
// 				qty : 2,
// 				ing :"577d3129c305134c2c3c8022"

// 			},
// 			{
// 				qty : 1,
// 				ing :"577d3129c305134c2c3c8023"

// 			},
// 			{
// 				qty : 1,
// 				ing :"577d3129c305134c2c3c8024"

// 			}
// 		]
// 	},
// 	{
// 		name		: 'Vodka Tonic',
// 		shaken		: false,
// 		wellDrink	: true,
// 		ingredients : [
// 			{	
// 				qty : 2,
// 				ing : "577d3129c305134c2c3c8025"
// 			},
// 			{	
// 				qty : 1,
// 				ing : "577d3129c305134c2c3c8026"
// 			}
// 		]
// 	}
// ]

// drinkList.forEach(function(drink){
// 	var drinkObj = new Drink(drink)
// 	drinkObj.save(function(err, doc){
// 		console.log('DONE', err)
// 	})
// })
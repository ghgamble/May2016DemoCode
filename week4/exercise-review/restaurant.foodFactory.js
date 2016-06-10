angular.module('Restaurant')
	.factory('FoodFactory', [foodFact])

function foodFact(){

	function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
		this.name = name;
		this.calories = calories;
		this.vegan = vegan;
		this.glutenFree = glutenFree;
		this.citrusFree = citrusFree;
	}

	function Plate(name, description, price, ingredients) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.ingredients = ingredients;
	}
	Plate.prototype.matchesDiet = function(preference){
		var matches = true;
		this.ingredients.forEach(function(ingredient){
			if(!ingredient[preference]){
				matches = false
			}
		})
		return matches
	}

	function Drink(name, description, price, ingredients) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.ingredients = ingredients;
	}

	Drink.prototype.matchesDiet = function(preference){
		var matches = true;
		this.ingredients.forEach(function(ingredient){
			if(!ingredient[preference]){
				matches = false
			}
		})
		return matches
	}

	function Order(plates) {
		this.plates = plates;
	}

	Order.prototype.totalPrice = function(){
		return this.plates.reduce(function(total, plate){
			return total + plate.price
		}, 0)
	}

	function Menu(plates) {
		this.plates = plates;
	}

	function Restaurant(name, description, menu) {
		this.name = name;
		this.description = description;
		this.menu = menu;
	}

	// Part II TEST
	var tortilla = new FoodItem('Tortilla', 300, true, false, true);
	var avocado = new FoodItem('Avocado', 90, true, true, true);
	var carne = new FoodItem('Carne', 250, false, true, true);

	var onion = new FoodItem('Onion', 50, true, true, true);
	var cilantro = new FoodItem('Cilantro', 30, true, true, true);

	var tequila = new FoodItem('Tequila', 200, true, true, true);
	var triplesec = new FoodItem('Triple Sec', 100, true, true, true);
	var lime = new FoodItem('Lime', 40, true, true, false);

	var burrito = new Plate('Burrito', 'A hearty meal.', 10, [tortilla, avocado, carne]);

	var guacamole = new Plate('Guácomole', 'What chips were invented for.', 4, [avocado, onion, cilantro, lime]);
	var margarita = new Drink('Margarita', 'Delicious and makes you feel good.', 6, [tequila, triplesec, lime]);

	var menu = new Menu([burrito, guacamole, margarita]);
	var restaurant = new Restaurant('Banditos Fritos', 'A fine Mexican dining experience.', menu);

	return {
		// Constructors
		FoodItem 	: FoodItem,
		Plate 		: Plate,
		Drink 		: Drink,
		Order 		: Order,
		Menu 		: Menu,
		Restaurant 	: Restaurant,

		// Instances
		foodItemList : [
			tortilla,
			avocado,
			carne,
			onion,
			cilantro,
			tequila,
			triplesec,
			lime,
		],
		plateList : [
			burrito,
			guacamole,
		],
		drinkList :[
			margarita
		],

		menu : menu,

		restaurant : restaurant

	}

}
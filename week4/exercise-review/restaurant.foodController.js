angular.module('Restaurant')
	.controller('FoodController', ['FoodFactory', foodController])

function foodController(FoodFactory){

	var ctrl = this;

	ctrl.restaurant = FoodFactory.restaurant;

}
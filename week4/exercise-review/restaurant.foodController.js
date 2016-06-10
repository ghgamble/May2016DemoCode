angular.module('Restaurant')
	.controller('FoodController', ['FoodFactory', foodController])

function foodController(FoodFactory){

	var ctrl = this;

	ctrl.restaurant = FoodFactory.restaurant;
	ctrl.currentOrder = new FoodFactory.Order([]); // Our order starts as an empty array of plates

	console.log(ctrl);

	ctrl.addToOrder = function(plate){
		console.log(plate);
		ctrl.currentOrder.plates.push(plate); // Pushing the clicked menu item into our order's plates array
	}

	// will not work, plateInfo isn't real
	// ctrl.addPlate = function(plateInfo){
	// 	FoodFactory.menu.plates.push(new FoodFactory.Plate(plateInfo))
	// }

}
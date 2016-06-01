angular.module('PBnJ', []) // with 2 arguments, angular.module will CREATE a module

//angular.module('PBnJ') // with 1 argument, angular.module will RETRIEVE a module

// function myFunc(){
	// # of arguments can be used to change how a function works
// 	if(arguments.length === 1)
// }

// Dependency Injection - 
//     You don't have access to EVERYTHING in angular in every controller.
//      DI is a way of GETTING access to those components

// $inject
angular.module('PBnJ')
	.controller('butterKnife', ['$http', '$timeout', function($http, $timeout){
			console.log('Hello from the controller');

			var bk = this;
			bk.storeName = "TST^";

			bk.sandwiches = [
				{
					bread            : 'Sourdough',
					nutButter        : 'Pistachio',
					jelly 			 : 'Peach',
					extraIngredients : [
						'Cholula',
						'Marshmallows',
						'Kale',
					],
					name 			 : 'Fall from Grace',
				},
				{
					bread            : 'Wonder',
					nutButter        : 'Kroger Brand Peanut Butter',
					jelly 			 : 'Great Value Grape',
					extraIngredients : [
						'Nutella',
						'Bacon',
						'Cheese Doritos',
					],
					name 			 : 'Freshman 50',
				},
				{
					bread            : 'Artisan Pumpernickel Naan',
					nutButter        : '30yr Nepalese Cashew Butter',
					jelly 			 : 'Curried Date Chutney',
					extraIngredients : [
						'ToadSweat',
						'Leafed Spinach',
						'Arugula',
					],
					name 			 : 'The Khaan',
				}
			];
			bk.removeIngredient = function(ingredientIndex, sandwichIndex){
				// we want to REMOVE an ingredient from a sandwich
				console.log("Ingredient : ", ingredientIndex);
				console.log("Sandwich : ", sandwichIndex);

				// 1. Find correct sandwich
				var foundSandwich = bk.sandwiches[sandwichIndex];
				// 2. Splice element from ingredients array
				foundSandwich.extraIngredients.splice(ingredientIndex, 1);
			}

			// $timeout(function(){
			// 	bk.sandwiches[0].extraIngredients.splice(0,1);
			// 	console.log('SPLICED', bk.sandwiches);
			// }, 3000)
	}])

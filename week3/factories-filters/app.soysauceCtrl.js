angular.module('SauceApp')
	.controller('SoySauce', ['SauceFactory', '$timeout',soysauceCtrl])

function soysauceCtrl (SauceFactory, $timeout){
	console.log('hi from soysauce', SauceFactory);
	var soy = this;
	soy.greeting = "Sodium and pigeons blood";
	soy.menuItems = SauceFactory.data;
	console.log('SOY', soy);
	
	function newItem(){
		soy.menuItems.push({
			name : 'TofuKetchup Medley',
			sauce : "Catsup",
			mainIngredient : 'Tofurkey',
			price : .98
		})
	}

	$timeout(newItem, 3000)

	soy.cheapItems = function(element, index, array){
		// console.log(arguments) // we don't know what angular is passing to this function!

		// Filter expects a return of true (keep) or false(throw away)

		return element.price < 5 ? true : false
		// CONDITION ? TRUEVAL : FALSEVAL
		// VS
		// if(element.price < 5){
		// 	return true
		// }
		// else{
		// 	return false
		// }
	}
}
// =============Controller File ^^================== \\

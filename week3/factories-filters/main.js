angular.module('SauceApp', [])
// ==============Module File ^^================= \\

angular.module('SauceApp')
	.controller('Ketchup', ketchupCtrl)

ketchupCtrl.$inject = ['SauceFactory', '$timeout'];
function ketchupCtrl (SauceFactory, $timeout){
	// the value of SauceFactory is EXACTLY what you returned from the factory
	console.log('hi from ketchup', SauceFactory);
	var ket = this;
	ket.greeting = "Sugar and fake blood";
	
	// exposing a piece of SauceFactory to the view
	ket.menuItems = SauceFactory.data;
	
}
// =============Controller File ^^================== \\

angular.module('SauceApp')
	.controller('SoySauce', ['SauceFactory', '$timeout',soysauceCtrl])

function soysauceCtrl (SauceFactory, $timeout){
	console.log('hi from soysauce', SauceFactory);
	var soy = this;
	soy.greeting = "Sodium and pigeons blood";
	soy.menuItems = SauceFactory.data;

	function newItem(){
		soy.menuItems.push({
			name : 'TofuKetchup Medley',
			sauce : "Catsup",
			mainIngredient : 'Tofurkey'
		})
	}

	$timeout(newItem, 3000)

}
// =============Controller File ^^================== \\

angular.module('SauceApp')
	.factory('SauceFactory', sauceFactory)

function sauceFactory (){
	var menuItems = [
		{
			name : 'French Fries',
			sauce : 'Ketchup',
			mainIngredient : '\'Taters'
		},
		{
			name : 'Dumplings',
			sauce : 'SoySauce',
			mainIngredient : 'Pigeon'
		},
		{
			name : 'SoySauce Carrot stuff',
			sauce : 'SoySauce',
			mainIngredient : 'Carrots'
		}
	]

	// Factories REQUIRE a return statement
	// Whatever you RETURN, is EXACTLY what you get access to in your controllers
	// 99% of the time, your Factories will return OBJECTS

	// Exporting data on an OBJECT will make your life much easier.  If you're always expecting the factory to be an object, you can add/remove properties from the object WITHOUT having to change code you've already written (for the most part)

	// return menuItems //Array
	// VS
	// return {         //Object
	//	data : menuItems,
	//  suppliers : []
	//}

	// the ONLY information you can get out of a factory is what you RETURN
	return {
		data : menuItems,
	}
}


// =============Factory File ^^ =================\\
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

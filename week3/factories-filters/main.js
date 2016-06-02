angular.module('SauceApp', [])
// ==============Module File ^^================= \\

angular.module('SauceApp')
	.controller('Ketchup', ketchupCtrl)

function ketchupCtrl (){
	console.log('hi from ketchup');
	var ket = this;
	ket.greeting = "Sugar and fake blood";
	ket.menuItems = [
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
}
// =============Controller File ^^================== \\

angular.module('SauceApp')
	.controller('SoySauce', soysauceCtrl)

function soysauceCtrl (){
	console.log('hi from soysauce');
	var soy = this;
	soy.greeting = "Sodium and pigeons blood";
	soy.menuItems = [
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
}
// =============Controller File ^^================== \\

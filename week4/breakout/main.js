angular.module('app', [])

angular.module('app')
	.factory('myFactory', ['$http', function($http){

		function getPokemon(pokemonID){
			// step one
			return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonID)

		}
		// function getIvysaur(pokemonID){
		// 	// step one
		// 	return $http.get('http://pokeapi.co/api/v2/pokemon/2')

		// }

		return {
			getPokemon : getPokemon,
			// getIvysaur : getIvysaur
		}
	}])

angular.module('app')
	.controller('myController', ['myFactory', function(myFactory){

		var ctrl = this;
		// Getting a randomon
		myFactory.getPokemon( Math.floor( Math.random() * 700 ) )
			.then(function(responseData){
				// step four
				console.log(responseData)
				// THIS IS THE ONLY PLACE WHERE RESPONSEDATA RELIABLY EXISTS!
				// if you need to do something with that data right away, do it here

				ctrl.pokemon = responseData.data
			})
		// myFactory.getIvysaur()
		// 	.then(function(responseData){
		// 		// step four
		// 		console.log(responseData)
		// 	})
	}])


	
angular.module('pokeFactoryModule', [])
  .factory("pokemonFactory",pokemonFactory)

  // if(something){
  //   pokemFactory.$inject = ["serviceA"]
  // }else{
  //   pokemonFactory.$inject = ["serviceB"]
  // }

  pokemonFactory.$inject = ['$http']
  function pokemonFactory($http){
    var factoryObject = {}
    var allPokemonUrl = '/api/v5/pokemon'
    factoryObject.catchEmAll = function(){
      return $http.get(allPokemonUrl)
      // $http.get(allPokemonUrl)
      //   .then(function(response){
      //     return response
      //   })
    }
    return factoryObject
  }

angular.module('pokemonControllerModule',[])
  .controller('pokeCtrl',pokeCtrl)

  pokeCtrl.$inject = ['pokemonFactory']

function pokeCtrl(pokemonFactory){
  var pCtrl = this
  console.log("pokemon controller loaded")
  pokemonFactory.catchEmAll()
    .then(function(response){
      console.log(response)
      pCtrl.pokemons = response.data.results
    })
}

(function() {
  angular.module('pokeApp',[])
    // .controller('pokeController', ['$scope', '$log', function($log, $scope){}])
    .controller('pokeController', pokeCtrl)

    pokeCtrl.$inject = ['$scope','$http']

    function pokeCtrl($scope,$http){
      var pCtrl = this
      pCtrl.text = 'PokeApp'

      pCtrl.searchPokedex = function(url){
        console.log('searching for pokemon....')

        $http.get(url)
          .then(function(response){
            console.log("Pokemon data:", response)
            pCtrl.currentPokemon = response.data
          }, function(error){
            console.error(error)
          })
        // $http.get(url).then(success, error)
        // function success(res){}
        // function error(e){}
      }

      $http.get('http://pokeapi.co/api/v2/pokemon?limit=811')
        // .then(success, error)
        .then(function(response){
          console.log("Pokedex:", response)
          pCtrl.pokedex = response.data.results
        }, function(error){
          console.error(error)
        })

    }


}());

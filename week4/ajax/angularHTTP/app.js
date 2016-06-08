(function() {
  angular.module('pokeApp',[])
    // .controller('pokeController', ['$scope', '$log', function($log, $scope){}])
    .controller('pokeController', pokeCtrl)

    pokeCtrl.$inject = ['$scope','$http']

    function pokeCtrl($scope,$http){
      var pCtrl = this
      pCtrl.text = 'PokeApp'


      pCtrl.searchPokedex = function(){
        console.log('searching for pokemon....');
        // $http.get()
      }

      // $http.get()

    }


}());

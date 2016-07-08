angular.module('HeroesOfAJAX')
    .controller('heroesController', heroesCtrl)

heroesCtrl.$inject = ['$http']
function heroesCtrl($http){
    var hCtrl = this;

    hCtrl.createHero = function(){
        // console.log(hCtrl.newHero)
        $http.post('/api/heroes', hCtrl.newHero)
    }
}
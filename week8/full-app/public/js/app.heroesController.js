angular.module('HeroesOfAJAX')
    .controller('heroesController', heroesCtrl)

heroesCtrl.$inject = ['$http']
function heroesCtrl($http) {
    var hCtrl = this;

    // Instantiating our newHero object with an array
    hCtrl.newHero = {
        powers: ['']
    }

    hCtrl.createHero = function () {
        // console.log(hCtrl.newHero)
        $http.post('/api/heroes', hCtrl.newHero)
            .then(function (returnData) {
                // Reset the form back to default
                hCtrl.newHero = {
                    powers: ['']
                }
            })
    }

    hCtrl.addPower = function (e) {
        e.preventDefault()
        hCtrl.newHero.powers.push('')
    }
}
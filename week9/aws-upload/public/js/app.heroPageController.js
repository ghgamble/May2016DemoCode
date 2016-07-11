angular.module("HeroesOfAJAX")
    .controller('heroPageController', hpController)

hpController.$inject = ['$http', '$stateParams']
function hpController ($http, $stateParams){
    var hpCtrl = this;
    console.log($stateParams)

    $http.get('/api/heroes/' + $stateParams.id)
        .then(function(returnData){
            hpCtrl.theHero = returnData.data
        })

}
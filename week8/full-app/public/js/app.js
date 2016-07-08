angular.module('HeroesOfAJAX', ['ui.router'])
    .config(configRouter)

configRouter.$inject = ['$stateProvider', '$urlRouterProvider']
function configRouter($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('heroes',{
            url : '/',
            templateUrl : '/html/heroes.html',
            controller : 'heroesController as hCtrl'
        })
        .state('heroPage', {
            url : '/heroes/:id',
            templateUrl : '/html/heroPage.html',
            controller : 'heroPageController as hpCtrl'
        })
}
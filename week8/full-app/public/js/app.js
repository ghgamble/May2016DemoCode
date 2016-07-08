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
}
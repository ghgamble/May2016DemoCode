angular.module('routerApp',['ui.router'])
  .config(configRouter)

configRouter.$inject = ['$stateProvider', '$urlRouterProvider']


  function configRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl as hCtrl'
      })
  }

angular.module('routerApp',['ui.router'])
  .config(configRouter)
  .controller('homeCtrl', homeController)
configRouter.$inject = ['$stateProvider', '$urlRouterProvider']


  function configRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl as hCtrl'
      })
  }

  //controller function
  function homeController(){
    var hCtrl = this
    hCtrl.title = "Home Controller"
  }

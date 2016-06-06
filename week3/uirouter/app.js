angular.module('routerApp',['ui.router'])
  .config(configRouter)
  .controller('homeCtrl', homeController)
  .controller('loginCtrl', loginController)
configRouter.$inject = ['$stateProvider', '$urlRouterProvider']
loginController.$inject = ['$state']


  function configRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl as hCtrl'
      })
      .state('login',{
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl as lCtrl'
      })
    $urlRouterProvider.otherwise('/')
  }

  //controller function
  function homeController(){
    var hCtrl = this
    hCtrl.title = "Home Controller"
  }
  function loginController($state){
    var lCtrl = this
    lCtrl.title = "Login Controller"
    lCtrl.login = function(){
      //some ajax call
      $state.go('home')
    }
  }

(function() {
  angular.module('donutApi',['ui.router','donutsCtrlModule'])
    .config(routerConfig)

    routerConfig.$inject = ['$stateProvider','$urlRouterProvider']

    function routerConfig($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'partials/home.html',
          controller: 'allDonutsCtrl as donutsCtrl'
        })

        $urlRouterProvider.otherwise('/')
    }



}())

(function() {
  angular.module('donutApi',['ui.router'])
    .config(routerConfig)

    routerConfig.$inject = ['$stateProvider','$urlRouterProvider']

    function routerConfig($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'partials/home.html'
        })

        $urlRouterProvider.otherwise('/')
    }



}())

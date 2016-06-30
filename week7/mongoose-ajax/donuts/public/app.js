(function() {
  angular.module('donutApi',['ui.router','donutsCtrlModule', 'donutFactoryModule'])
    .config(routerConfig)

    routerConfig.$inject = ['$stateProvider','$urlRouterProvider']

    function routerConfig($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'partials/home.html',
          controller: 'allDonutsCtrl as donutsCtrl'
        })
        .state('create-donut',{
          url: '/create-donut',
          templateUrl: 'partials/donut_form.html',
          controller: 'createDonutsCtrl as donutCtrl'
        })

        $urlRouterProvider.otherwise('/')
    }



}())

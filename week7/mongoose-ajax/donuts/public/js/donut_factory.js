(function() {
    angular.module('donutFactoryModule',[])
      .factory('donutFactory',donutFactory)

      donutFactory.$inject = ['$http']

      function donutFactory($http){
          var factoryObject = {}

          factoryObject.allDonuts = function(){
            return $http.get('/api/v0/donuts')
          }
          factoryObject.create = function(donut){
            return $http.post('/api/v0/donuts',donut)
          }

          return factoryObject
      }
}())

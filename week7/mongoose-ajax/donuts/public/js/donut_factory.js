(function() {
    angular.module('donutFactoryModule',[])
      .factory('donutFactory',donutFactory)

      donutFactory.$inject = ['$http']

      function donutFactory($http){
          var factoryObject = {}

          factoryObject.allDonuts = function(){
            return $http.get('/api/v0/donuts')
          }
          factoryObject.single = function(id){
            return $http.get('/api/v0/donuts/'+id)
          }
          factoryObject.create = function(donut){
            return $http.post('/api/v0/donuts' , donut)
          }
          factoryObject.update = function(donut){
            return $http.put('/api/v0/donuts/'+ donut._id , donut)
          }
          factoryObject.destroy = function(id){
            return $http.delete('/api/v0/donuts/'+ id)
          }


          return factoryObject
      }
}())

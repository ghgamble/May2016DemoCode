(function() {
  //CREATE A SEPERATE MODULE FOR EACH JS FILE
  angular.module('foodMODULE', [])
  //BELOW IS THE ACTUAL FACTORY
    .factory('foodFact', foodFact)
    //FUNCTION DECLARATION FOR THE FACTORY
    function foodFact($http){
      var fFactory = {}
      //SEND A REQUEST TO OUR SERVER AND RETURN A PROMISE
      fFactory.create = function(plate){
        return $http.post('/api/v1/plates', plate)
      }

      fFactory.all = function(){
        return $http.get('/api/v1/plates')
      }


      return fFactory
    }

}());

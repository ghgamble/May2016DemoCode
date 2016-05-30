(function() {
  angular.module('myApp',[])
   .controller('myController',myController)
   .controller('secondController', function($scope){
     $scope.name = 'second controller'

   })

   function myController(){
     var myCtrl = this
     myCtrl.show = false
     myCtrl.name = 'my controller'
     myCtrl.hippos = ['Kyle','Tony','Omar']
     myCtrl.myfunc = function(){
       myCtrl.show = !myCtrl.show
     }
   }



}());

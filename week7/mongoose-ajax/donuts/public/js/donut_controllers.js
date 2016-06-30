(function() {
    angular.module('donutsCtrlModule',[])
      .controller('allDonutsCtrl',allDonutsCtrl)

      function allDonutsCtrl(){
        var donutsCtrl = this

        donutsCtrl.title = "The Land of Donuts"
      }
}())

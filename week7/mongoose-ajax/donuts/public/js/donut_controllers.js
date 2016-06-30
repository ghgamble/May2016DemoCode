(function() {
    angular.module('donutsCtrlModule',[])
      .controller('allDonutsCtrl',allDonutsCtrl)
      .controller('createDonutsCtrl',createDonutsCtrl)

      allDonutsCtrl.$inject = ['donutFactory']

      function allDonutsCtrl(donutFactory){
        var donutsCtrl = this

        donutsCtrl.title = "The Land of Donuts"

        donutFactory.allDonuts()
            .then(function(response){
                console.log("All Donuts Response==========",response)
                donutsCtrl.donuts = response.data
            })
      }

      createDonutsCtrl.$inject = ['donutFactory','$state']

      function createDonutsCtrl(donutFactory,$state){
        var donutCtrl = this

        donutCtrl.title = "Create your dream donut"

        donutCtrl.createDonut = function(){
            donutFactory.create(donutCtrl.newDonut)
                .then(function(response){
                    console.log('New donut response',response)
                    $state.go('home')
                })
        }
    }
}())

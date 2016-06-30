(function() {
    angular.module('donutsCtrlModule',[])
      .controller('allDonutsCtrl',allDonutsCtrl)
      .controller('createDonutsCtrl',createDonutsCtrl)
      .controller('updateDonutsCtrl',updateDonutsCtrl)

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
        donutCtrl.create = true
        donutCtrl.title = "Create your dream donut"

        donutCtrl.createDonut = function(){
            donutFactory.create(donutCtrl.newDonut)
                .then(function(response){
                    console.log('New donut response',response)
                    $state.go('home')
                })
        }
    }

    updateDonutsCtrl.$inject = ['donutFactory','$state','$stateParams']

    function updateDonutsCtrl(donutFactory,$state,$stateParams){
      var donutCtrl = this

      donutCtrl.title = "Update Donut"
      donutCtrl.update = true

      donutFactory.single($stateParams.id)
        .then(function(response){
            donutCtrl.currentDonut = response.data
        })
        donutCtrl.destroy = function(id){
            donutFactory.destroy(id)
             .then(function(response){
                 console.log("Donut was Destroyed!!!!!!!!!!!!!!")
                 $state.go('home')
             })
        }
      donutCtrl.updateDonut = function() {
        donutFactory.update(donutCtrl.currentDonut)
          .then(function(response) {
            console.log("Updated donut", response)
            $state.go('home')
          })
      }
     }
}())

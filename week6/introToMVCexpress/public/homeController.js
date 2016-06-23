(function() {
  //CREATE A SEPERATE MODULE FOR EACH JS FILE
  angular.module('homeMODULE',[])
  //BELOW IS THE ACTUAL CONTROLLER
    .controller('homeCtrl', homeCtrl)
    //INJECT FACTORY INTO CONTROLLER
    homeCtrl.$inject = ['foodFact']
    //FUNCTION DECLARATION FOR HOME CONTROLLER
    function homeCtrl(foodFact){
      //CONTROLLER AS SYNTAX INSTEAD OF $SCOPE
      var hCtrl = this

      hCtrl.name = "home Controller"

      //SUBMIT METHOD FOR ANGULAR FORM
      hCtrl.submitPlate = function(plate){
        //MAKE THE API CALL FROM YOUR FACTORY OBJECT
        foodFact.create(plate)
          .then(function (response) {
            console.log("response from server create method",response)
          })
      }
    }


}());

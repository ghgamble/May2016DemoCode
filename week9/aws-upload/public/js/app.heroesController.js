angular.module('HeroesOfAJAX')
    .controller('heroesController', heroesCtrl)

heroesCtrl.$inject = [
    '$http', 
    'Upload' // This is a service defined by ngFileUpload
]
function heroesCtrl($http, Upload) {
    var hCtrl = this;

    // Instantiating our newHero object with an array
    hCtrl.newHero = {
        powers: ['']
    }

    hCtrl.createHero = function () {
        // console.log(hCtrl.newHero)
       
        // ngFileUpload's Upload service allows us to post data
        // to our server (automatically sends POST request)
        Upload.upload({
            url : '/api/heroes',
            data : {
                files : hCtrl.newHero.costume, // This could be an array of files
                data : hCtrl.newHero
            }
        }).then(function (returnData) {
                // Reset the form back to default
                hCtrl.newHero = {
                    powers: ['']
                }
                hCtrl.getHeroes()
            })


        // Old Upload w/o file
        // $http.post('/api/heroes', hCtrl.newHero)
        //     .then(function (returnData) {
        //         // Reset the form back to default
        //         hCtrl.newHero = {
        //             powers: ['']
        //         }
        //         hCtrl.getHeroes()
        //     })
    }

    hCtrl.addPower = function (e) {
        e.preventDefault()
        hCtrl.newHero.powers.push('')
    }

    hCtrl.getHeroes = function(){
        $http.get('/api/heroes')
            .then(function(returnData){
                hCtrl.heroes = returnData.data
            })
    }
    hCtrl.getHeroes()
}
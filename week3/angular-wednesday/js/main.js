// [] = dependencies | other modules

angular.module("happyModule", ['ngRoute'])
    .config(routerConfig)
    .controller("happyController", iDontKnow)
    // .controller('whatever', [whateverDude])

function iDontKnow() {
    var happyBar = this

    happyBar.title = 'Happy Time'

    happyBar.show = function() {
        //  happyBar.name exists after a user places a value in the input
        console.log('happyBar.name', happyBar.name)
    }
    // similar to: addEventListener(function($puppy){})
    happyBar.happyMouse = function(event) {
        console.log('MOUSE-OVER event fired!', event)
        $puppy.target.style.width = '100%'
    }
    happyBar.sadMouse = function(event) {
        console.log('MOUSE-ENTER event fired!', event)
    }
    happyBar.mickeyMouse = function(event) {
        console.log('MOUSE-LEAVE event fired!', event)
    }
}

function routerConfig($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'partials/home.html',
        controller  : 'happyController as andrew'
    })
    .when('/login', {
        templateUrl : 'partials/login.html',
        controller  : 'happyController as andrew'
    })
    .otherwise({ redirect: '/' })

}

// function whateverDude() {}

// thing = [];
// [window.thing] exists!
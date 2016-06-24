
angular.module( 'mainModule', [] ) 


angular.module( 'mainModule' )
    .controller('mainController', ['$scope', '$http', '$location', function($scope, $http, $location){
        // $location is the EXACT SAME OBJECT as window.location. Either one can be used to change the URL and redirect the browser to another page.
        console.log($location === window.location)
        // This is our click handler function. It tells the server our current location, and the server response by telling the client the next location. Then, the client goes to the next location by assigning to window.location.href. This sends a GET request to our server, which is handled by our static middleware
        $scope.next = function(location){
            $http.get('/next?location=' + location).then(function(returnData){
                console.log(returnData.data)
                window.location.href = '/html/' + returnData.data.nextLocation + '.html'
            })
        }

    }])



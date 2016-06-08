(function() {
  angular.module('pokeApp',[])
    // .controller('pokeController', ['$scope', '$log', function($log, $scope){}])
    .controller('pokeController', pokeCtrl)
    .factory("MyYelpAPI", yelpApi)

    pokeCtrl.$inject = ['$scope','$http','MyYelpAPI']

    function pokeCtrl($scope,$http, MyYelpAPI){
      var pCtrl = this
      pCtrl.text = 'PokeApp'
      MyYelpAPI.retrieveYelp('', function(data) {
                    console.log(data)

                })
      pCtrl.searchPokedex = function(url){
        console.log('searching for pokemon....')

        $http.get(url)
          .then(function(response){
            console.log("Pokemon data:", response)
            pCtrl.currentPokemon = response.data
          }, function(error){
            console.error(error)
          })
        // $http.get(url).then(success, error)
        // function success(res){}
        // function error(e){}
      }

      $http.get('http://pokeapi.co/api/v2/pokemon?limit=811')
        // .then(success, error)
        .then(function(response){
          console.log("Pokedex:", response)
          pCtrl.pokedex = response.data.results
        }, function(error){
          console.error(error)
        })

    }

    //Yelp Factory for requests
    function yelpApi($http){
          return {
              retrieveYelp: function(name, callback) {
                  var method = 'GET';
                  var url = 'http://api.yelp.com/v2/search';
                  var params = {
                          callback: 'angular.callbacks._0',
                          location: 'San+Francisc',
                          oauth_consumer_key: 'IQaizv7T1_qfhOvq3iurXQ', //Consumer Key
                          oauth_token: 'SWfeNyhhWT85CLWryOpbtLMKD8hIsd8v', //Token
                          oauth_signature_method: "HMAC-SHA1",
                          oauth_timestamp: new Date().getTime(),
                          oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                          term: 'food'
                      };
                  var consumerSecret = '4uXV53TabsI-kSyul7ZBqcuP9bs'; //Consumer Secret
                  var tokenSecret = '7yUzFe9aVz2fXFM20TigUZ5nrDU'; //Token Secret
                  var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
                  params['oauth_signature'] = signature;
                  $http.jsonp(url, {params: params}).success(callback);
              }
          }
    }
    function randomString(length, chars) {
                   var result = '';
                   for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
                   return result;
               }


}());

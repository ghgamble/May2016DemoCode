;(function () {
  angular.module('pokeApp', ['spotify','angular-carousel'])
    .config(function (SpotifyProvider) {
      SpotifyProvider.setClientId('c79d6d2d5ac74b39a6048c4342d0fb7e')
      SpotifyProvider.setRedirectUri('http://localhost:8080')
      SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public')
    // If you already have an auth token
    // SpotifyProvider.setAuthToken('<AUTH_TOKEN>')
    })
    // .controller('pokeController', ['$scope', '$log', function($log, $scope){}])
    .controller('pokeController', pokeCtrl)
    .factory('MyYelpAPI', yelpApi)
    .factory('MyTwitAPI', twitApi)

  pokeCtrl.$inject = ['$scope', '$http', 'MyYelpAPI', 'Spotify','MyTwitAPI']

  function pokeCtrl ($scope, $http, MyYelpAPI,Spotify,MyTwitAPI) {
    var pCtrl = this
    pCtrl.text = 'PokeApp'
    MyTwitAPI.retrieveTwit('',function(data){
      console.log(data)
    })
    MyYelpAPI.retrieveYelp('', function (data) {
      console.log(data)

    })
    Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
      console.log("from Spotify",data)
    })
    pCtrl.searchPokedex = function (url) {
      console.log('searching for pokemon....')

      $http.get(url)
        .then(function (response) {
          console.log('Pokemon data:', response)
          pCtrl.currentPokemon = response.data
        }, function (error) {
          console.error(error)
        })
    // $http.get(url).then(success, error)
    // function success(res){}
    // function error(e){}
    }

    $http.get('http://pokeapi.co/api/v2/pokemon?limit=811')
      // .then(success, error)
      .then(function (response) {
        console.log('Pokedex:', response)
        pCtrl.pokedex = response.data.results
      }, function (error) {
        console.error(error)
      })

  }

  // Yelp Factory for requests
  function yelpApi ($http) {
    return {
      retrieveYelp: function (name, callback) {
        var method = 'GET'
        var url = 'http://api.yelp.com/v2/search'
        var params = {
          callback: 'angular.callbacks._0',
          location: 'San+Francisc',
          oauth_consumer_key: 'IQaizv7T1_qfhOvq3iurXQ', // Consumer Key
          oauth_token: 'SWfeNyhhWT85CLWryOpbtLMKD8hIsd8v', // Token
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: new Date().getTime(),
          oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          term: 'food'
        }
        var consumerSecret = '4uXV53TabsI-kSyul7ZBqcuP9bs' // Consumer Secret
        var tokenSecret = '7yUzFe9aVz2fXFM20TigUZ5nrDU' // Token Secret
        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, {
          encodeSignature: false
        })
        params['oauth_signature'] = signature
        $http.jsonp(url, {
          params: params
        }).success(callback)
      }
    }
  }

  // Twitter Factory for requests
  function twitApi ($http) {
    return {
      retrieveTwit: function (name, callback) {
        var method = 'GET'
        var url = 'https://api.twitter.com/1.1/users/search.json'
        var params = {
          oauth_consumer_key: 'MBkUf0Q63aBUtOVLJTKW17OPj', // Consumer Key
          oauth_token: '204707730-8CUSGeMYidHhQyxBfgqA0M4u1MUx2XW0mtOEgssH', // Token
          oauth_version: 1.0,
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: new Date().getTime(),
          oauth_nonce: randomString(32,'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
        }
        var consumerSecret = '9cTFVY80oU9JYB5hu1JmTlfNVdRuANuLGSuZ0rDdAeFCq3O0yT' // Consumer Secret
        var tokenSecret = 'AG7TeyLsFK4opRrwyOy86qu0d4dbU8nccfaCWXQluNnYr' // Token Secret
        // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
        var encodedSignature = oauthSignature.generate(oauth)
        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, {
          encodeSignature: false
        })
        params['oauth_signature'] = signature
        $http.jsonp(url, {
          header: params
        }).success(callback)
      }
    }
  }

  function randomString (length, chars) {
    var result = ''
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))]
    return result
  }

}())

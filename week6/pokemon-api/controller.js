var request = require('request')

module.exports = {
  pokemonCtrl: {
    all: function(req, res) {
      request('http://pokeapi.co/api/v2/pokemon', function(error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body)
          res.json(JSON.parse(body))
        }
      })
    }
  }
}

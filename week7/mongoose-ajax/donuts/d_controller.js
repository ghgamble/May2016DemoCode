var Donut = require('./donut_model')

var donutController = {
    all: function( req, res ) {
        Donut.find({}, function(error, donuts){
            if( error ) {
                console.error('ERROR finding donuts:', error)
            } else {
                res.json( donuts )
            }
        })
    }
}

module.exports = donutController

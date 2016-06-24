var express = require('express');
var app = express();
app.use( express.static( __dirname + '/public' ) ) 


// handle requests to the homepage by explicitly sending down the first location
app.get('/', function(req, res){
    res.sendFile('seville.html', {root : './public/html'})
})

// arrays are great keeping track of ordered data, like the sequence of locations in magellan's voyage.
var locations = [
    'seville',
    'canaryIslands',
    'capeVerde',
    'straitOfMagellan',
    'guam',
    'philippines',
]

// this route uses the query string to find out the current location, uses the current location to figure out the next location in the locations array, and then sends down JSON to tell the client what the next location is. Unless the current location in the query string is not in the locations array, then we just call next() and drop down to the 404 handler.
app.get('/next', function(req, res, next){
    if ( locations.indexOf(req.query.location) === -1 ) {
     return next() 
 }
    res.send({
        // location     : req.query.location,
        nextLocation : locations[locations.indexOf(req.query.location)+1]
    })
})

// if a request gets past our other route handlers, it is a 404 error by definition.
app.use(function(req, res){
    res.status(404).sendFile('404.html', {root: './public/html'})
})

// Listen for connections \\
app.listen(3000, function(){
	console.log('We good on port 3000')
})
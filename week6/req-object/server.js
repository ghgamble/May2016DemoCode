// Server.js

// Requires -> pulling in the modules we need
var express    = require('express')
var bodyParser = require('body-parser')
var morgan     = require('morgan')

// Creates our express app object
var app = express()

// Set up initial config / middleware mounting
app.use( morgan('dev') )
app.use( bodyParser.urlencoded({ extended : true }) )
app.use( bodyParser.json() )
app.use( express.static(path.resolve(__dirname, '/public')) )

// Routes
// app.get('/library/books', function(req, res){
//     console.log(req.query)
//     res.send(req.query);
// })

// Listen for connections
app.listen(process.env.PORT || 3000, function(){
    console.log("Server listening at " + port)
})

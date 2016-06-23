// Server.js

// Requires -> pulling in the modules we need
var express    = require('express')
var bodyParser = require('body-parser')
var morgan     = require('morgan')
var path       = require('path') // url, path, querystring

// Creates our express app object
var app = express()

// Set up initial config / middleware mounting
app.use( morgan('dev') )
// app.use( bodyParser.urlencoded({ extended : true }) ) //
// app.use( bodyParser.json() )
app.use( bodyParser() )
app.use( express.static(path.resolve(__dirname, 'public')) )

// Routes
// GET :: http://localhost:8080/library/books
app.get('/library/books', function( req, res ){
    var reqObjProps = {
        query: req.query,
        ip: req.ip,
        protocol: req.protocol,
        headers: req.headers,
        path: req.path,
        hostname: req.hostname
    }

    console.log(reqObjProps)
    res.json(reqObjProps)
})

// POST :: http://localhost:8080/library/books
// resource :: http://www.w3schools.com/tags/ref_urlencode.asp
app.post('/library/books', function( req, res ){
    console.log(req.body)
    res.send(req.body)
})

app.get('/library/book/:id', function( req, res ){
    console.log(req.params)
    res.send(req.params)
})

app.get('/library/books/:year/:author', function( req, res ){
    console.log(req.params)
    res.send(req.params)
})

app.post('/library/book/:id', function( req, res ){
    console.log(req.params)
    res.send({
        params: req.params,
        body: req.body
    })
})

// Listen for connections
app.listen(8080, function(){
    console.log("Server listening at " + 8080)
})

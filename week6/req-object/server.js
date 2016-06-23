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
// @reference: https://www.npmjs.com/package/body-parser
app.use( bodyParser.urlencoded({ extended : true }) )
app.use( bodyParser.json() )
// app.use( bodyParser() )
app.use( express.static(path.resolve(__dirname, 'public')) )

// Routes
// GET :: http://localhost:8080/library/books?title=Hamlet&limit=1
app.get('/library/books', function( req, res ){
    // JSON viewer extension
    // @reference: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en
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
// @reference: http://www.w3schools.com/tags/ref_urlencode.asp
app.post('/library/books', function( req, res ){
    console.log(req.body)
    // req.body.title = req.body.title.toUpperCase()
    res.json(req.body)
})
// GET :: http://localhost:8080/library/books/1
app.get('/library/book/:id', function( req, res ){
    console.log('Params:', req.params.id) // 1
    res.json(req.params.id) // setting JSON headers in the the response so that the browser definitely knows it is recieving JSON
})
// POST :: http://localhost:8080/library/books/1
app.post('/library/book/:id', function( req, res ){
    console.log('Params:', req.params)
    res.send({
        params: req.params,
        body: req.body
    })
})

// GET :: http://localhost:8080/library/search/books?title=Hamlet
app.get('/library/search/:topic', function( req, res ){
    console.log('Params:', req.params.id) // 1
    res.json({
        params: req.params,
        query: req.query
    }) // setting JSON headers in the the response so that the browser definitely knows it is recieving JSON
})

// GET :: http://localhost:8080/library/books/1589/shakespeare
app.get('/library/books/:year/:author', function( req, res ){
    console.log('Params:', req.params)
    res.send(req.params)
})

// Listen for connections
app.listen(8080, function(){
    console.log("Server listening at " + 8080)
})

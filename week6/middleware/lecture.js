'use strict'

var express = require('express'), // creating the express object
    app = express(), // instantiating the express application
    cookieParser = require('cookie-parser') // loading the cookie-parser middleware

// ORDER MATTERS
app.use(checkKeyMiddleware)
app.use(cookieParser()) // mounting the middleware

// app.use(function(req,res,next) {
//     req.name = 'awesome';
//
//     if( req.cookies.name ) {
//         next()
//     } else {
//         res.end();
//     }
//     // res.end()
//     // res.send();
// });

app.get('/', function(req, res){
    // req.cookies
    console.log(req.name, req.cookies)
    res.send('ok') // send the response
})

function checkKeyMiddleware( req, res, next ) {
    // req.query (GET)  :: querystring values (?key1=val1&key2=val2....)
    // req.body (POST)  :: post payload
    // req.params (ANY) :: url segments
    console.log('here', Date.now())
    if( req.query.key ) {
        next()
    } else {
        res.send('No key found!')
    }
}

app.get('/user/:id', function() {
    // prevent the request from going to the
    // next middleware if the id is greater than 100
    console.log(req.params)
})

function middlewareTest( req, res, next ) {
    req.params
}

app.listen(process.env.PORT||8080) // start the server

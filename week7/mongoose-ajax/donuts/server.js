var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
var apiRouter = require('./api_routes')
var port = 8080

var app = express()

mongoose.connect('mongodb://localhost/donuts',
    function( error ){
        if( error ) {
            console.error('ERROR starting mongoose!', error)
        } else {
            console.log('Mongoose connected successfully')
        }
    })
app.use(express.static(__dirname + '/public'))
// app.use(bodyParser()) // deprecated
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use('/api/v0', apiRouter)

app.listen(port, function(error){
    if( error ) {
        console.error('ERROR starting server!', error)
    } else {
        console.log('Server started successfully on port:', port)
    }
})

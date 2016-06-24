var express = require("express")
var bodyParser = require('body-parser')
var logger = require("morgan")
var apiRouter = require('./api_routes')
var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(express.static(__dirname + '/public'))
app.use('/api/v5',apiRouter)


app.listen(8080, function(err){
  if(err){
    console.error(err)
  }
   console.log('hey this worked, hi rich.')
})

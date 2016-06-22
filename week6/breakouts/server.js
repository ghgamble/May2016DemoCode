'use strict'

const express = require('express') // creating the express object
const app = express() // instantiating the express application
const cookieParser = require('cookie-parser') // loading the cookie-parser middleware
const path = require('path')
const morgan = require('morgan')
const middleware = require('./middleware')
// console.log(__dirname);

// function thingy() {
//     let obj = {}
//
//     (function(obj) {
//         console.log(obj)
//     })(obj)
// }

// morgan setup
morgan.token('ip', function(req, res){ return req.ip; })

app.use(middleware.logIp)
app.use(morgan(':ip :method :http-version :url :response-time'))
app.use(cookieParser(null, {})) // mounting the middleware
app.use(
    express.static(
        path.resolve(__dirname, 'public')
    )
);

// app.get('/', (req) => req.res.end())
app.get('/', function(req,res){
    res.end();
})

// app.get('/js/angular.js')
app.get('/ok', function(req, res){
    res.json({
        message: ok
    }) // send the response
})

app.listen(8999) // start the server


var anon = function() {
    global.funkiton = 'yeeeeeeah!';
    // global.funkiton = 'yeeeeeeah!'
    // console.log(global)
}

anon()

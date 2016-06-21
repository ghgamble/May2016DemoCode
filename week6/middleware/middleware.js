var express = require('express') // creating the express object
    app = express() // instantiating the express application
    cookieParser = require('cookie-parser') // loading the cookie-parser middleware

app.use(cookieParser()) // mounting the middleware

app.get('/', function(req, res){
    res.send('ok') // send the response
})

app.listen(process.env.PORT||8080) // start the server

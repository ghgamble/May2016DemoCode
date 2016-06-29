var express = require('express');
var app = express()

app.get('/', function(req, res, next){
    // when we throw an error, express skips over all of our regular middleware, and goes straight to the error handling middleware
    // console.log(req.fakeProp.IMadeThisUp)
    if (true){
        var myError = new Error('something went wrong...')
        myError.status = 503
        return next(myError)
    }
    res.send('welcome to the homepage.')
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404).send('nope!')
});

// app.use('/',indexRouter)
// app.use('/api',apiRouter)
// app.use(errorRouter)

// error-handling middleware has FOUR arguments
app.use(function(err, req, res, next) {
    console.log('500 error!')
    res.status(err.status || 500);
    console.log(err)
    res.send('error!!');
});

app.set('port', process.env.PORT || 3000);
app.server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.server.address().port);
});


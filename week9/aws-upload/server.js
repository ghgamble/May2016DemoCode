// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost/heroesofajax')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// NEED TO HAVE MULTIPART DATA
var multiparty = require('connect-multiparty')
// Connect multi-party helps our sever understand
// MULTI-PART FORM DATA (Files AND Data)

// Routes \\


app.get('/', function(req, res){
  res.sendFile('/html/home.html', {root : './public'})
});

// Heroes API routes
var heroCtrl = require('./controllers/heroController.js')
app.get('/api/heroes', heroCtrl.get)
app.get('/api/heroes/:id', heroCtrl.get)

// Calling Multiparty to parse the data!
app.post('/api/heroes', multiparty(), heroCtrl.upsert)





// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
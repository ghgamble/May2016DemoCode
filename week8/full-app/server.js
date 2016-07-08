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

// Routes \\


app.get('/', function(req, res){
  res.sendFile('/html/home.html', {root : './public'})
});

// Heroes API routes
var heroCtrl = require('./controllers/heroController.js')

app.post('/api/heroes', heroCtrl.upsert)





// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost/drinks')

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

// Drinks Routes
var drinksCtrl = require('./controllers/drinksController')
app.get('/api/drinks', drinksCtrl.get) // Get All
app.get('/api/drinks/:id', drinksCtrl.get) // Get One
app.post('/api/drinks', drinksCtrl.upsert) // Create
app.post('/api/drinks/:id', drinksCtrl.upsert) // Update
app.delete('/api/drinks/:id', drinksCtrl.delete) // Delete

// Ingredients Routes
var ingredientsCtrl = require('./controllers/ingredientsController')
app.get('/api/ingredients', ingredientsCtrl.get) // Get All
app.get('/api/ingredients/:id', ingredientsCtrl.get) // Get One
app.post('/api/ingredients', ingredientsCtrl.upsert) // Create
app.post('/api/ingredients/:id', ingredientsCtrl.upsert) // Update
app.delete('/api/ingredients/:id', ingredientsCtrl.delete) // Delete



// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});

// DECLARE GLOBAL VARIABLES
var
  Express    = require('express'),
  app        = Express(),
  bodyParser = require('body-parser'),
  logger     = require('morgan'),
  path       = require('path'),
  apiRoutes  = require('./api_routes'),//module.exports = apiRouter
  port       = process.env.PORT || 1337,
  mongoose   = require('mongoose')

//Create db connection
mongoose.connect('mongodb://localhost/food_db', function(err){
  if(err) console.log("Error connecting to mongodb")
  if(!err) console.log("YOU HAVE CONNECTED TO THE MONG-GODS!")
})

// APPLY MIDDLEWARE
app.use(logger('dev')) // LOG ALL IN-COMING ROUTES
app.use(bodyParser.json()) // PARSE ALL FORM DATA TO JSON
app.use(bodyParser.urlencoded({extended: true})) // ALLOW URL-ENCODED TO BE PARSED
app.use(Express.static(path.join(__dirname, './public'))) // SERV YOUR PUBLIC FILES FOR THE FRONTEND

// MOUNT THE API ROUTES
app.use('/api/v1', apiRoutes)
// apiRouter.route('/api/v1/plates')
//   .get(ctrls.platesController.all)
//   .post(ctrls.platesController.create)

// LISTEN ON A SPECIFIC PORT CHECK FOR ERROR
app.listen(port, function (err) {
  if (!err) console.log('Server is listening on port: ' + port)
  if (err)  console.log('Server Crashed!')
})

//IMPORT YOUR EXTERNAL MODULE'S
var
    ctrls = require('./controllers'),
    apiRouter = require('express').Router()

// USE THE EXPRESS ROUTER TO DECLARE ROUTES
// app.get('/plates', func(){})
    apiRouter.route('/plates')
      .get(ctrls.platesController.all)
      .post(ctrls.platesController.create)


module.exports = apiRouter

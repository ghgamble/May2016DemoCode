var apiRouter = require('express').Router()

var donutController = require('./d_controller')

// http//localhost/api/v0/donuts
apiRouter.route('donuts')
    .get(donutController.all)

module.exports = apiRouter

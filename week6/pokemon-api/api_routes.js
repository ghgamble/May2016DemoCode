var ctrl = require('./controller')
var express = require('express')
var apiRouter = express.Router()

apiRouter.route('/pokemon')
  .get(ctrl.pokemonCtrl.all)

module.exports = apiRouter

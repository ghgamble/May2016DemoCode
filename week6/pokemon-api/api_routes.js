var ctrl = require('./controller')
var apiRouter = require('express').Router()

apiRouter.route('/pokemon')
  .get(ctrl.pokemonCtrl.all)

module.exports = apiRouter

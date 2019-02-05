const Game = require('../models/game')

function indexRoute(req, res){
  Game
    .find()
    .then(games => res.status(200).json(games))
}

function createRoute(req, res){
  Game
    .create(req.body)
    .then(game => res.status(201).json(game))
    .catch(err => res.status(422).json(err.message))
}

function showRoute(req, res){
  Game
    .findById(req.params.id)
    .then(game => res.status(200).json(game))
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute
}

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/games')

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  release: { type: Date, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true},
  developer: { type: String, required: true },
  platforms: { type: Array, required: true },
  metascore: { type: Number },
  rating: { type: Number }
})

const Game = mongoose.model('Game', gameSchema)

app.get('/api/games', (req, res) => {
  Game
    .find()
    .then(games => res.status(200).json(games))
    .catch(err => res.status(404).json(err.message))
})

app.post('/games', (req, res) => {
  Game
    .create(req.body)
    .then(game => res.status(201).json(game))
    .catch(err => res.status(422).json(err.message))
})

app.listen(4000, () => console.log('Express listening on 4000'))

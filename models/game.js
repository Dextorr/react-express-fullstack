const mongoose = require('mongoose')

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

module.exports = mongoose.model('Game', gameSchema)

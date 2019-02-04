const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/games')

app.get('/games', (req, res) => {
  res.json({ message: 'index route'})
})

app.post('/games', (req, res) => {
  res.json({ message: 'create route'})
})

app.listen(4000, () => console.log('Express listening on 4000'))

require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = require('./config/routes')

const app = express()
mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())

app.use('/api', router)


app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(process.env.PORT, () =>
  console.log(`Express listening on ${process.env.PORT}`)
)

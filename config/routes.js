const router = require('express').Router()
const gamesController = require('../controllers/games')

router.route('/games')
  .get(gamesController.index)
  .post(gamesController.create)

router.route('/games/:id')
  .get(gamesController.show)

module.exports = router

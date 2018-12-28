const express = require('express')
const characterController = require('./../controllers/character')
const router = express.Router()

router
  .route('/:id')
  .get(characterController.getCharacter)

router
  .route('/byName/:name')
  .get(characterController.getCharacterByName)

module.exports = router
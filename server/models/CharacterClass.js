const mongoose = require('mongoose')

let CharacterClassSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('CharacterClass', CharacterClassSchema)
const mongoose = require('mongoose')

let RaceSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Race', RaceSchema)
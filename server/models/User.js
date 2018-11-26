const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema(
 {
   username: String
 }
)

module.exports = mongoose.model('User', UserSchema)
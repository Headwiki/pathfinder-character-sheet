const mongoose = require('mongoose')

let CharacterSchema = new mongoose.Schema(
  {
    name: String,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"]
    },
    age: Number,
    size: String,
    height: String,
    weight: String,
    hair: String,
    eyes: String,
    alignment: {
      type: String,
      enum: ["LG", "LN", "LE", "NG", "NN", "NE", "CG", "CN", "CE"]
    },
    level: Number,
    race: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Race'
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class'
    },
    deity: String,
    homeland: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
)

module.exports = mongoose.model('Character', CharacterSchema)

/*
TODO:
  Implement support for mulitclasses
    classes: [
      {
        class: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Class'
        },
        level: Number
      }
    ]
*/

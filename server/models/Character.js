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
    totalLevel: Number,
    race: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Race'
    },
    classes: [
      {
        class: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Class'
        },
        level: Number
      }
    ],
    deity: String,
    homeland: String,
    abilityScores: {
      strength: {
        abilityModifier: Number,
        tempAdjustment: Number,
        tempModifier: Number
      },
      dexterity: {
        abilityModifier: Number,
        tempAdjustment: Number,
        tempModifier: Number
      },
      constitution: {
        abilityModifier: Number,
        tempAdjustment: Number,
        tempModifier: Number
      },
      intelligence: {
        abilityModifier: Number,
        tempAdjustment: Number,
        tempModifier: Number
      },
      wisdom: {
        abilityModifier: Number,
        tempAdjustment: Number,
        tempModifier: Number
      },
      charisma: {
        abilityModifier: Number,
        tempAdjustment: Number,
        tempModifier: Number
      }
    },
    hp: {
      total: Number,
      current: Number,
      dr: Number
    },
    initiative: {
      dexModifier: Number,
      miscModifier: Number
    },
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

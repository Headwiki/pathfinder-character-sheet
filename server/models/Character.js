const mongoose = require('mongoose')
const common = require('./common')

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
      strength: common.abilityScore,
      dexterity: common.abilityScore,
      constitution: common.abilityScore,
      intelligence: common.abilityScore,
      wisdom: common.abilityScore,
      charisma: common.abilityScore
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
    speed: {
      base: Number,
      withArmor: Number,
      fly: Number,
      swim: Number,
      climb: Number,
      burrow: Number,
      tempModifier: Number
    },
    armorClass: {
      armorBonus: Number,
      shieldBonus: Number,
      dexModifier: Number,
      sizeModifier: Number,
      naturalArmor: Number,
      deflectionModifier: Number,
      miscModifier: Number,
      touch: Number,
      flatFooted: Number
    },
    savingThrows: {
      fortitude: common.saveThrow,
      reflex: common.saveThrow,
      will: common.saveThrow
    },
    baseAttackBonus: Number,
    spellResistance: Number,
    cmb: {
      baseAttackBonus: Number,
      strengthModifier: Number,
      sizeModifier: Number
    },
    cmd: {
      baseAttackBonus: Number,
      strengthModifier: Number,
      dexterityModifier: Number,
      sizeModifier: Number
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
)

// Virtual attributes to calculate total stat values
/*
Object.keys(this.abilityScores).forEach((abilityScore) => {
          CharacterSchema
            .virtual(abilityScore + 'Total')
            .get(() => {
              this.abilityScores[abilityScore].baseScore +
              this.abilityScores[abilityScore].abilityModifier +
              this.abilityScores[abilityScore].tempAdjustment +
              this.abilityScores[abilityScore].tempModifier
            })
})
*/
CharacterSchema
  .virtual('strengthTotal')
  .get(() => {
    this.abilityScores.strength.baseScore +
    this.abilityScores.strength.abilityModifier +
    this.abilityScores.strength.tempAdjustment +
    this.abilityScores.strength.tempModifier
  })

module.exports = mongoose.model('Character', CharacterSchema)
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
    sizeModifiers: {
      normal: Number,
      special: Number,
      fly: Number,
      stealth: Number
    },
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
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }
)

/* CharacterSchema.set('toObject', { virtuals: true })
CharacterSchema.set('toJSON', { virtuals: true }) */


// Methods //

// Returns totals of the different ability scores
CharacterSchema.method('getAbilityScore', function(ability) {
  return this.abilityScores[ability].baseScore +
      this.abilityScores[ability].tempAdjustment +
      this.abilityScores[ability].tempModifier
})

CharacterSchema.method('getAbilityModifier', function(ability) {
  return Math.floor(
    (this.getAbilityScore(ability) - 10) / 2
  )
})

// Returns totals of the different saving throws scores
CharacterSchema.method('getSavingThrow', function(saveThrowType) {
  let abilityModifier = 0;

  if (saveThrowType.toLowerCase() == "fortitude")
    abilityModifier = this.getAbilityModifier('constitution')
  else if (saveThrowType.toLowerCase() == "reflex")
    abilityModifier = this.getAbilityModifier('dexterity')
  else if (saveThrowType.toLowerCase() == "will")
    abilityModifier = this.getAbilityModifier('wisdom')

  return this.savingThrows[saveThrowType].baseSave +
      abilityModifier +
      this.savingThrows[saveThrowType].magicModifier +
      this.savingThrows[saveThrowType].miscModifier +
      this.savingThrows[saveThrowType].temporaryModifier
})

// Returns total armor class score
CharacterSchema.method('getArmorClass', function() {
  return 10 + 
    this.armorClass.armorBonus +
    this.armorClass.shieldBonus +
    this.armorClass.dexModifier +
    this.armorClass.sizeModifier +
    this.armorClass.naturalArmor +
    this.armorClass.deflectionModifier +
    this.armorClass.miscModifier
})

// Returns total initiative score
CharacterSchema.method('getInitiative', function() {
  return this.getAbilityModifier('dexterity') +
    this.initiative.miscModifier
})

// Returns total CMB score
CharacterSchema.method('getCMB', function() {
  return this.baseAttackBonus +
    this.getAbilityModifier('strength') +
    this.sizeModifiers.normal
})

// Returns total CMD score
CharacterSchema.method('getCMD', function() {
  return 10 +
    this.baseAttackBonus +
    this.getAbilityModifier('strength') +
    this.getAbilityModifier('dexterity') +
    this.sizeModifiers.normal
})


module.exports = mongoose.model('Character', CharacterSchema)

/*
  TODO:
    Calculate sizeModifiers values when instansiated
*/
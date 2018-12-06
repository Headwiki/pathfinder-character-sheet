const mongoose = require('mongoose')

const abilityScore = {
    abilityModifier: Number,
    tempAdjustment: Number,
    tempModifier: Number
}

const saveThrow = {
    baseSave: Number,
    abilityModifier: Number,
    magicModifier: Number,
    miscModifier: Number,
    temporaryModifier: Number
}

module.exports = { abilityScore, saveThrow }
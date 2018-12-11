const mongoose = require('mongoose')

const abilityScore = {
    baseScore: Number,
    abilityModifier: Number,
    tempAdjustment: Number,
    tempModifier: Number
}

const saveThrow = {
    baseSave: Number,
    magicModifier: Number,
    miscModifier: Number,
    temporaryModifier: Number
}

module.exports = { abilityScore, saveThrow }
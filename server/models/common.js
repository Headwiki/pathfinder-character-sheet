const mongoose = require('mongoose')

const abilityScore = {
    baseScore: {
        type: Number,
        default: 0
    },
    abilityModifier: {
        type: Number,
        default: 0
    },
    tempAdjustment: {
        type: Number,
        default: 0
    },
    tempModifier: {
        type: Number,
        default: 0
    }
}

const saveThrow = {
    baseSave: Number,
    abilityModifier: Number,
    magicModifier: Number,
    miscModifier: Number,
    temporaryModifier: Number
}

module.exports = { abilityScore, saveThrow }
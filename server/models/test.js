const Character = require('./Character')

let char = new Character({
    abilityScores: {
        strength: {
            baseScore: 1,
            abilityModifier: 2,
            tempAdjustment: 3,
            tempModifier: 4
        },
        dexterity: {
            baseScore: 5,
            abilityModifier: 6,
            tempAdjustment: 7,
            tempModifier: 8
        },
        constitution: {
            baseScore: 9,
            abilityModifier: 0,
            tempAdjustment: 1,
            tempModifier: 2
        },
        intelligence: {
            baseScore: 3,
            abilityModifier: 4,
            tempAdjustment: 5,
            tempModifier: 6
        },
        wisdom: {
            baseScore: 7,
            abilityModifier: 8,
            tempAdjustment: 9,
            tempModifier: 0
        },
        charisma: {
            baseScore: 1,
            abilityModifier: 2,
            tempAdjustment: 3,
            tempModifier: 3
        }
      }
})

console.log(char.strengthTotal)
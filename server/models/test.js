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
            baseScore: 7,
            abilityModifier: 0,
            tempAdjustment: 0,
            tempModifier: 0
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
      },
      savingThrows: {
          will: {
            baseSave: 0,
            magicModifier: 2,
            miscModifier: 3,
            temporaryModifier: 4
          }
      },
      armorClass: {
        armorBonus: 0,
        shieldBonus: 1,
        dexModifier: 2,
        sizeModifier: 3,
        naturalArmor: 4,
        deflectionModifier: 5,
        miscModifier: 6,
        touch: 7,
        flatFooted: 8
      },
})

console.log('Ability Score Strength: ' + char.getAbilityScore('strength') + ', modifier: ' + char.getAbilityModifier('strength'))
console.log('Ability Score Constitution: ' + char.getAbilityScore('constitution') + ', modifier: ' + char.getAbilityModifier('constitution'))
console.log('Ability Score Intelligence: ' + char.getAbilityScore('intelligence') + ', modifier: ' + char.getAbilityModifier('intelligence'))
console.log('Ability Score Wisdom: ' + char.getAbilityScore('wisdom') + ', modifier: ' + char.getAbilityModifier('wisdom'))
console.log('Saving throw Will: ' + char.getSavingThrow('will'))
console.log('Armor Class: ' + char.getArmorClass())

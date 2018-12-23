require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
//const ObjectId = require('mongodb').ObjectID;
const Character = require('./models/Character')
const User = require('./models/User')
const Race = require('./models/Race')
const CharacterClass = require('./models/CharacterClass')

mongoose.connect('mongodb://mongodb/pathfinder', { useNewUrlParser: true }, function (err) {
    if (err) { console.log(err) }
});

let user = new User({
    username: "Headwiki"
})

let race = new Race({
    name: "Human"
})

let characterClass = new CharacterClass({
    name: "Cleric"
})

let userId, raceId, characterClassId = "";

let createDummyUserPromise = new Promise((resolve, reject) => {
    User.findOne({ username: "Headwiki" }, '_id', function(err, resultUser) {
        if (err) reject(err)

        // If not found, create user
        if (!resultUser) {
            user.save((err, obj) => {
                if (err) reject(err)
                else {
                    console.log('Saved user: ' + obj._id)
                    userId = obj._id
                    resolve()
                }
            })
        } else {    // User already exists, return user id
            console.log('Fetched user: ' + resultUser._id)
            userId = resultUser._id
            resolve()
        }
    })
})

let createDummyRacePromise = new Promise((resolve, reject) => {
    Race.findOne({ name: "Human" }, '_id', function(err, resultRace) {
        if (err) reject(err)

        // If not found, create user
        if (!resultRace) {
            race.save((err, obj) => {
                if (err) reject(err)
                else {
                    console.log('Saved race: ' + obj._id)
                    raceId = obj._id
                    resolve()
                }
            })
        } else {    // User already exists, return user id
            console.log('Fetched race: ' + resultRace._id)
            raceId = resultRace._id
            resolve()
        }
    })
    
})

let createDummyCharacterClassPromise = new Promise((resolve, reject) => {
    CharacterClass.findOne({ name: "Cleric" }, '_id', function(err, resultCharacterClass) {
        if (err) reject(err)

        // If not found, create user
        if (!resultCharacterClass) {
            characterClass.save((err, obj) => {
                if (err) reject(err)
                else {
                    console.log('Saved characterClass: ' + obj._id)
                    characterClassId = obj._id
                    resolve()
                }
            })
        } else {    // User already exists, return user id
            console.log('Fetched characterClass: ' + resultCharacterClass._id)
            characterClassId = resultCharacterClass._id
            resolve()
        }
    })
    
})


Promise.all([createDummyCharacterClassPromise, createDummyRacePromise, createDummyUserPromise]).then(() => {
    
    let char = new Character({
        name: "Lia Sarenwell",
        gender: "Female",
        age: 21,
        size: "Medium",
        sizeModifiers: {
            normal: 0,
            special: 0,
            fly: 0,
            stealth: 0
        },
        height: "170cm",
        weight: "60kg",
        hair: "Blonde",
        eyes: "Blue",
        alignment: "NG",
        totalLevel: 1,
        race: mongoose.Types.ObjectId(raceId),
        classes: [
            {
                class: mongoose.Types.ObjectId(characterClassId),
                level: 1
            }
        ],
        deity: "Deity",
        homeland: "Homeland",
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
                baseScore: 30,
                abilityModifier: 0,
                tempAdjustment: 0,
                tempModifier: 0
            },
            charisma: {
                baseScore: 40,
                abilityModifier: 0,
                tempAdjustment: 0,
                tempModifier: 0
            }
        },
        hp: {
            total: 36,
            current: 36,
            dr: 0
        },
        initiative: 0,
        speed: {
            base: 30,
            withArmor: 20,
            fly: 0,
            swim: 0,
            climb: 0,
            burrow: 0,
            tempModifier: 0
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
        savingThrows: {
            fortitude: {
                baseSave: 1,
                magicModifier: 2,
                miscModifier: 3,
                temporaryModifier: 4
            },
            reflex: {
                baseSave: 2,
                magicModifier: 3,
                miscModifier: 4,
                temporaryModifier: 5
            },
            will: {
                baseSave: 0,
                magicModifier: 2,
                miscModifier: 3,
                temporaryModifier: 4
            }
        },
        baseAttackBonus: 3,
        spellResistance: 0,
        owner: mongoose.Types.ObjectId(userId)
    })

    Character.findOne({ name: "Lia Sarenwell" }, function(err, resultCharacter) {
        if (err) console.log('Error: ' + err)

        // If not found, create user
        if (!resultCharacter) {
            char.save((err, obj) => {
                if (err) reject(err)
                else {
                    console.log('Saved character: ' + obj._id)
                    console.log('Saved character: ' + obj)
                }
            })
        } else {    // User already exists
            console.log('Fetched Character: ' + resultCharacter)
        }
    })
    return 0;
})



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.APP_SERVER_PORT, () => console.log(`Example app listening on port ${process.env.APP_SERVER_PORT}!`))

    /* 
    console.log('Ability Score Strength: ' + char.getAbilityScore('strength') + ', modifier: ' + char.getAbilityModifier('strength'))
    console.log('Ability Score Constitution: ' + char.getAbilityScore('constitution') + ', modifier: ' + char.getAbilityModifier('constitution'))
    console.log('Ability Score Intelligence: ' + char.getAbilityScore('intelligence') + ', modifier: ' + char.getAbilityModifier('intelligence'))
    console.log('Ability Score Wisdom: ' + char.getAbilityScore('wisdom') + ', modifier: ' + char.getAbilityModifier('wisdom'))
    console.log('Ability Score Charisma: ' + char.getAbilityScore('charisma') + ', modifier: ' + char.getAbilityModifier('charisma'))
console.log('Saving throw Will: ' + char.getSavingThrow('will'))
console.log('Armor Class: ' + char.getArmorClass()) */

const Character = require('./../models/Character')

module.exports = {
    getCharacter: (req, res, next) => {
        Character.findById(req.params.id, (err, character)=> {
            if (err)
                res.send(err)
            else if (!character)
                res.send(404)
            else
                res.send(character)           
        })
    },
    getCharacterByName: (req, res, next) => {
        Character.findOne({ name: req.params.name }, (err, character)=> {
            if (err)
                res.send(err)
            else if (!character)
                res.sendStatus(404)
            else
                res.send(character)            
        })
    }
}
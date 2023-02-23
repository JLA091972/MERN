//controller needs to be able to access the model --../models/song.model
const Song = require('../models/song.model')

//Controller CRUD: Create, Read, Update, Delete

//create
module.exports.addSong = (req,res) => {
    const newSong = req.body
    Song.create(newSong)   //save to database
    .then(song => res.json(song))
    .catch(err => res.status(400).json(err))  //backend validation, send info to user with status 400
}

//Read all info
module.exports.allSongs = (req,res) => {
    Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.json(err))  //backend validation
}

//Read one info
module.exports.oneSong = (req,res) => {
    const idFromParams = req.params.id
    Song.findOne({_id: idFromParams })
    .then((onesong) => res.json(onesong))
    .catch(err => res.json(err))  //backend validation
}

//Update one info
module.exports.updateSong = (req,res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    //update: criteria, updated value, options
    Song.findOneAndUpdate({_id: idFromParams},updatedValue,{new:true, runValidators:true})
    .then((updatedsong) => res.json(updatedsong))
    .catch(err => res.status(400).json(err))  //backend validation, send info to user with status 400
}

//Delete one song
module.exports.deleteSong = (req,res) => {
    const idFromParams = req.params.id;
    Song.deleteOne({_id: idFromParams})
    .then(message => res.json(message))
    .catch(err => res.json(err))  //backend validation
}

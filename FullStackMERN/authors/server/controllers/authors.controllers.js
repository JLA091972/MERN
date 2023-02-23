const Author = require('../models/authors.model')

// CRUD

//Create
module.exports.addAuthor = (req,res) => {
    const newAuthor = req.body
    Author.create(newAuthor)
    .then (author => res.json(author))
    .catch (err => res.status(400).json(err))
}

//Read all info
module.exports.allAuthors = (req,res) => {
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json(err))  //backend validation
}

//Read one info
module.exports.oneAuthor = (req,res) => {
    const idFromParams = req.params.id
    Author.findOne({_id: idFromParams })
    .then((oneauthor) => res.json(oneauthor))
    .catch(err => res.json(err))  //backend validation
}

//Update one info
module.exports.updateAuthor = (req,res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    //update: criteria, updated value, options
    Author.findOneAndUpdate({_id: idFromParams},updatedValue,{new:true, runValidators:true})
    .then((updatedauthor) => res.json(updatedauthor))
    .catch(err => res.status(400).json(err))  //backend validation, send info to user with status 400
}

//Delete one author
module.exports.deleteAuthor = (req,res) => {
    const idFromParams = req.params.id;
    Author.deleteOne({_id: idFromParams})
    .then(message => res.json(message))
    .catch(err => res.json(err))  //backend validation
}

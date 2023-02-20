// will hold the logic for each model/method. going to create, update , delete, read one/all

const Joke = require('../models/jokes.model');

module.exports.allJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ results: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.oneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ results: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.addJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => {
            res.json({ results: newJoke })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }  //validate information
    )
        .then(updatedUser => {
            res.json({ results: updatedUser })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })  //deleteOne is a built in function with mongoose.
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}

module.exports.randomJoke = (req, res) => {
    Joke.aggregate([{$sample:{size:1}}] )
        .then(oneRandomJoke => {
            res.json({ results: oneRandomJoke })
        })
        .catch((err) => {
            res.json({ message: 'Error encountered:', error: err })
        });
}
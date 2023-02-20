//import mongoose
// schema name JokeSchema
//import Mongoose package.  !! make sure mongoose is installed

const mongoose = require('mongoose')

//create db schema and objects
const JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: [true, "Joke is required to ask people!!"],  //what message to comback for validation
        minlenght: [10, "Joke must be 10 char long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is needed to make people laugh!!"],  //what message to comback for validation
        minlenght: [10, "Joke must be 10 char long"]
    },
},
    { timestamps: true }  //keep track of time stamps
)

//register the table
module.exports = mongoose.model('Jokes', JokeSchema)
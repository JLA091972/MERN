const mongoose = require ('mongoose')

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Need to fill out title !!!"],
        minlength: [5, "Need at least 5 character for the title!!!"]
    },
    artist: {
        type: String,
        required: [true, "Artist is required"],
        minlength: [3, "Artist need at least 3 character"],
    },
    rating: {
        type: Number,
        min: [1, "Need to be 1-10"],
        max: [10, "Need to be 1-10"] 
    },
    top50: {
        type: Boolean,
        required: [false]
    }
},{timestamps:true})

//need this last line
module.exports = mongoose.model('Song',SongSchema)
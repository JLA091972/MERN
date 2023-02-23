const mongoose = require ('mongoose')

const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [3, "Author need at least 3 character"],
    }
}, {timestamp:true})

module.exports = mongoose.model('author', AuthorSchema)
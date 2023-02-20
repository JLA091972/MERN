//import mongoose
// schema name ProductSchema
//import Mongoose package.  !! make sure mongoose is installed

const mongoose = require('mongoose')

//create db schema and objects
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title of product is required !!"],  //what message to comback for validation
        minlenght: [3, "Title must be 3 char long"]
    },
    price: {
        type: Number,
        required: [true, "Price is needed for the product !!"],  //what message to comback for validation
        min: [0, "Product Price must be > 0 and < 1000"],
        max: [1000, "Product Price must be >0 and < 1000"]
    },
    description: {
        type: String,
        required: [true, "Description of product is required !!"],  //what message to comback for validation
        minlenght: [5, "Description must be 5 char long"]
    },
},
    { timestamps: true }  //keep track of time stamps
)

//register the table
module.exports = mongoose.model('Products', ProductSchema)
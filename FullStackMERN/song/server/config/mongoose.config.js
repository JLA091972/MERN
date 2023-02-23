const mongoose = require('mongoose')

const database = "songdatabase23"
mongoose.set('strictQuery', false);

mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser : true,
    useUnifiedTopology : true
} )
.then (() => console.log (`Connected to ${database}`))
.catch (err => console.log (`Error connecting ${database}`))

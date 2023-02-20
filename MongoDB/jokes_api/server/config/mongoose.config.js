//establish connection to the DB server
const mongoose = require('mongoose')

const database = 'jokeDB'
mongoose.set("strictQuery", true);

// pass options for any deprication on the terminal
mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log(`Connected to DB server ${database}`))
.catch( err => console.log('Error encountered:', err))


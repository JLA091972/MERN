// these top should always begin
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

//import mongoose
require('./config/mongoose.config.js');

//Configure Express:
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Routes = require('./routes/authors.routes.js')
Routes(app)

// --- end ---
// ap listen at this port then console log out
app.listen(port, () => console.log(`Nodemon running port: ${port}`))

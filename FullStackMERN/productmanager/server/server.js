// add dependencies
const express = require("express");
const app = express();
const cors = require('cors');

//config port
const port = 8000

// express config and cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import mongoose
require('./config/mongoose.config');

// //import routes
const Routes = require('./routes/products.routes.js')
Routes(app)
// // --- end of dependencies --- //

// these should be at the bottom
// ap listen at this port then console log out
app.listen(port, () => console.log(`Nodemon running port: ${port}`))
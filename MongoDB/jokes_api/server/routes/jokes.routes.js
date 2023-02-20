const JokesController = require('../controllers/jokes.controllers.js')


module.exports = (app) => {

    //create
    //create call back function with 2 arg. req=request and res=response
    app.post("/api/jokes/new", JokesController.addJoke);

    //read one
    app.get("/api/jokes/:id", JokesController.oneJoke);

    //read all
    app.get("/api/jokes", JokesController.allJokes);

    //update
    app.put("/api/jokes/update/:id", JokesController.updateJoke);

    //delete
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
}
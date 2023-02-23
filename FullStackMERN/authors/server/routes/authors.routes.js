const AuthorController = require('../controllers/authors.controllers')

module.exports = (app) => {
    //CRUD - Create Read Update Delete
    
    //create a author
    app.post('/api/author/new', AuthorController.addAuthor)

    //Read / display all
    app.get('/api/authors', AuthorController.allAuthors)

    //Read / display all
    app.get('/api/author/:id', AuthorController.oneAuthor)

    //Update 1
    app.put('/api/author/:id', AuthorController.updateAuthor)

    //Delete
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
}
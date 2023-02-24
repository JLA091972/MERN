const SongController = require('../controllers/song.controller')


module.exports = (app) => {
    //CRUD - Create Read Update Delete
    
    //create a song
    app.post('/api/songs/new', SongController.addSong)

    //Read / display all
    app.get('/api/songs', SongController.allSongs)

    //Read / display 1
    app.get('/api/song/:id', SongController.oneSong)

    //Update 1
    app.put('/api/song/:id', SongController.updateSong)

    //Delete
    app.delete('/api/song/:id', SongController.deleteSong)
}
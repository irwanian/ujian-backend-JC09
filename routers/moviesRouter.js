var express = require('express')
var router = express.Router()

const {moviesController} = require('../controllers')

router.get('/getmovies', moviesController.getMovies)
router.post('/addmovies', moviesController.addMovies)
router.delete('/deletemovies/:id', moviesController.deleteMovies)
router.put('/editmovies/:id', moviesController.editMovies)

module.exports = router
const movieCtrl = require('../controllers/moviesController');
const moviesRouter = require('express').Router();

moviesRouter.get('/MostPopularMovies', movieCtrl.getAllMovies)
moviesRouter.get('/ByIdMovies/:id', movieCtrl.getMovieById)

module.exports=moviesRouter
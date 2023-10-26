const router = require('express').Router()
const authMiddleWare = require('../src/middleware/auth');
const moviesController = require('../src/movies/controller');

router.use('/movies', authMiddleWare);

router.get('/movies', moviesController.getMovies);
router.post('/movies', moviesController.createMovie);

module.exports = router;
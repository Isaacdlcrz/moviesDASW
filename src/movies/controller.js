const Movie = require('./model')

class MoviesController {

    getMovies(req, res) {
        Movie.find().then(data => {
            res.send(data);
        }).catch(e => {
            res.sendStatus(500);
            console.log('Error:', e);
        })
    }

    createMovie(req, res) {
        Movie.create(req.body).then( data => {
            res.send("Movie created successfully");
        }).catch( e => {
            console.log("Error:", e);
        })
    }
}

module.exports = new MoviesController();
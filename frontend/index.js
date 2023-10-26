const moviesContainer = $('#moviesContainer')
const myModal = new bootstrap.Modal('#createMovieModal', {
    keyboard: false
})

const getMovies = () => {
    moviesContainer.empty()
    $.get('http://localhost:1111/movies?token=123', res => {
        console.log(res)
        for (const movie of res) {
            moviesContainer.append(
            `<div class="col-12 col-md-6 mb-2">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${movie.name}</h5>
                        <p class="card-text">${movie.director}</p>
                    </div>
                </div>
            </div>`
            )
        }
    })
}

getMovies();

$(document).ready(function(){
    $('#createMovieForm').submit(function(e){
        e.preventDefault();

        // Get form data
        const movieName = $('#movieName').val();
        const movieSynopsis = $('#movieSynopsis').val();
        const movieGenre = $('#movieGenre').val();
        const movieDuration = $('#movieDuration').val();
        const movieDirector = $('#movieDirector').val();
        const movieActors = $('#movieActors').val();

        const movieData = {
            name: movieName,
            synopsis: movieSynopsis,
            genre: movieGenre,
            duration: movieDuration,
            director: movieDirector,
            actors: movieActors
        }

        $.post('http://localhost:1111/movies?token=123', movieData, res => {
            console.log("He acabao c:");
            myModal.hide();
            getMovies();
        });
    });
});
const moviesContainer = $('#moviesContainer')

$.get('http://localhost:6969/movies?token=123', res => {
    console.log(res)
    for (const movie of res) {
        moviesContainer.append(
            `<div class="card mb-2 col-12 col-md-6">
                <div class="card-body">
                    <h5 class="card-title">${movie.name}</h5>
                    <p class="card-text">${movie.director}</p>
                </div>
            </div>`
        )
    }
})

$(document).ready(function(){
    $('#createMovieForm').submit(function(e){
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

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

        $.post('http://localhost:6969/movies?token=123', movieData, res => {
            console.log("He acabao c:");
        });
    });
});
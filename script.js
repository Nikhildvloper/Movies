// Predefined movie folder names and their paths
const movies = {
  "The Shawshank Redemption": "movies/The Shawshank Redemption/movie.jpg",
  "The Godfather": "movies/The Godfather/movie.jpg",
  "The Dark Knight": "movies/The Dark Knight/movie.jpg",
  "Pulp Fiction": "movies/Pulp Fiction/movie.jpg",
  "Forrest Gump": "movies/Forrest Gump/movie.jpg",
  "Inception": "movies/Inception/movie.jpg",
  "Fight Club": "movies/Fight Club/movie.jpg",
  "The Matrix": "movies/The Matrix/movie.jpg",
  "Goodfellas": "movies/Goodfellas/movie.jpg",
  "Interstellar": "movies/Interstellar/movie.jpg"
};

function searchMovies() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // Clear previous result

  if (query === '') return;

  const movieName = Object.keys(movies).find(movie =>
    movie.toLowerCase().includes(query)
  );

  if (movieName) {
    const imagePath = movies[movieName];
    resultDiv.innerHTML = `
      <img src="${imagePath}" alt="${movieName}">
      <p>${movieName}</p>
    `;
  } else {
    resultDiv.innerHTML = '<p>No movie found.</p>';
  }
}

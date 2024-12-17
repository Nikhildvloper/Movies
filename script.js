// Hardcoded list of movies (replace with actual movie folder names)
const moviesList = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
  "Forrest Gump",
  "Inception",
  "Fight Club",
  "The Matrix",
  "Goodfellas",
  "Interstellar"
];

// Search function
function searchMovies() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  if (query === '') return;

  const filteredMovies = moviesList.filter(movie =>
    movie.toLowerCase().includes(query)
  );

  if (filteredMovies.length === 0) {
    resultsDiv.innerHTML = '<p>No movies found.</p>';
    return;
  }

  filteredMovies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.className = 'movie-item';
    movieItem.textContent = movie;
    resultsDiv.appendChild(movieItem);
  });
}

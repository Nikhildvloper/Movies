let movieList = [];

// Load movie names from JSON file
fetch('movies.json')
  .then(response => response.json())
  .then(data => movieList = data)
  .catch(error => console.error('Error loading movies:', error));

function searchMovies() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // Clear previous results

  if (query === '') return;

  const matchedMovies = movieList.filter(movie =>
    movie.toLowerCase().includes(query)
  );

  if (matchedMovies.length > 0) {
    matchedMovies.forEach(movie => {
      const imagePath = `movies/${movie}/movie.jpg`; // Path to the movie image
      resultDiv.innerHTML += `
        <div>
          <img src="${imagePath}" alt="${movie}" onerror="this.onerror=null; this.src='placeholder.jpg';">
          <p>${movie}</p>
        </div>
      `;
    });
  } else {
    resultDiv.innerHTML = '<p>No movies found.</p>';
  }
}

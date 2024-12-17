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

  let filteredMovies;

  if (query === 'all') {
    // Show all movies if 'all' is typed
    filteredMovies = movieList;
  } else {
    // Filter movies based on query
    filteredMovies = movieList.filter(movie =>
      movie.toLowerCase().includes(query)
    );
  }

  if (filteredMovies.length > 0) {
    filteredMovies.forEach(movie => {
      const imagePath = `movies/${movie}/movie.jpg`;
      const textFilePath = `movies/${movie}/movie.txt`;

      // Create the movie result block
      const movieBlock = document.createElement('div');
      movieBlock.className = 'movie-block';
      movieBlock.innerHTML = `
        <img src="${imagePath}" alt="${movie}" onerror="this.onerror=null; this.src='placeholder.jpg';">
        <p>${movie}</p>
        <button class="download-btn" onclick="fetchDownloadLink('${textFilePath}', this)">Download</button>
      `;
      resultDiv.appendChild(movieBlock);
    });
  } else {
    resultDiv.innerHTML = '<p style="color: white; font-size: 1.2rem;">No movies found.</p>';
  }
}

function fetchDownloadLink(textFilePath, button) {
  // Fetch the content of the movie.txt file
  fetch(textFilePath)
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch download link');
      return response.text();
    })
    .then(downloadLink => {
      // Create a temporary link to download
      const tempLink = document.createElement('a');
      tempLink.href = downloadLink.trim();
      tempLink.download = '';
      tempLink.click();

      // Update button text
      button.textContent = 'Downloading...';
      setTimeout(() => (button.textContent = 'Download'), 2000);
    })
    .catch(error => {
      console.error('Error fetching download link:', error);
      alert('Download link not available.');
    });
}

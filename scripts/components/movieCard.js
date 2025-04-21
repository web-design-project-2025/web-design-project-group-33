export const MovieCard = (movie) => {
  return `
      <div class="movie-card">
        <img class="poster" src="${movie.poster}" alt="${movie.title}" />
        <p class="title">${movie.title}</p>
      </div>
    `;
};

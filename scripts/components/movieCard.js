export const MovieCard = (movie) => {
  return `
      <div id="${movie.id}" class="movie-card">
        <img class="poster" src="${movie.poster}" alt="${movie.title}" />
        <p class="title">${movie.title}</p>
      </div>
    `;
};

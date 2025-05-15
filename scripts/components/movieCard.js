export const MovieCard = (movie) => {
  const movieCard = document.createElement("div");
  movieCard.id = movie.id;
  movieCard.className = "movie-card";
  movieCard.innerHTML = ` 
    <img class="poster" src="${movie.poster}" alt="${movie.title}" />
    <p class="title">${movie.title}</p>
  `;

  return movieCard;
};

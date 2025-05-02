import { MovieCard } from "../../components/movieCard.js";
import { getMovies } from "../../api/movieData.js";

const trending = document.querySelector(".movies-container#trending");
const top = document.querySelector(".movies-container#top");
const page = document.querySelector(".movies-page");

const movies = await getMovies();

//disgusting fix for now
const trendingMovies = [];
const topMovies = [];
for (let i = 0; i < movies.length; i++) {
  if (i > 13) {
    trendingMovies.push(movies[i]);
  }
  if (i < 6) {
    topMovies.push(movies[i]);
  }
}

trending.innerHTML = trendingMovies.map((movie) => MovieCard(movie)).join("");
top.innerHTML = topMovies.map((movie) => MovieCard(movie)).join("");

page.addEventListener("click", (e) => {
  const movieId = parseInt(e.target.closest(".movie-card").id, 10);

  if (movieId) {
    window.location.assign(`movie.html?id=${movieId}`);
  }
});

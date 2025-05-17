import { MovieCard } from "../../components/movieCard.js";
import { getMovies } from "../../api/movieData.js";

const trending = document.querySelector(".movies-container#trending");
const top = document.querySelector(".movies-container#top");
const sorted = document.querySelector(".movies-container#sorted");
const page = document.querySelector(".page-content");
const sections = document.querySelectorAll(".movies-section");
const sectionTitle = document.querySelector(
  ".movies-section#sorted .section-title"
);

const movies = await getMovies();

const urlParams = new URLSearchParams(window.location.search);
const sort = urlParams.get("sort");

if (sort) {
  sections.forEach((section) => {
    if (section.id === "sorted") {
      section.classList.add("shown");
    } else {
      section.classList.add("hidden");
    }
  });

  if (sort === "newest") {
    sectionTitle.innerText = "Newest";

    movies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  }
  if (sort === "trending") {
    sectionTitle.innerText = "Trending";

    movies.sort((a, b) => b.totalLikes - a.totalLikes);
  }
  if (sort === "top") {
    sectionTitle.innerText = "Most Roasted";
    movies.sort((a, b) => b.totalReviews - a.totalReviews);
  }

  appendMovies(movies, sorted);
}

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

appendMovies(trendingMovies, trending);
appendMovies(topMovies, top);

function appendMovies(movies, container) {
  movies.forEach((movies, index) => {
    const movieCard = MovieCard(movies);
    movieCard.style.animationDelay = `${index * 50}ms`;
    container.appendChild(movieCard);
  });
}

page.addEventListener("click", (e) => {
  const card = e.target.closest(".movie-card");
  if (card) {
    const movieId = parseInt(card.id, 10);
    if (movieId) {
      window.location.assign(`pages/movies/movie.html?id=${movieId}`);
    }
  }

  if (e.target.className === "view-more") {
    e.preventDefault();
    window.location.assign(`pages/movies/movies.html?sort=${e.target.id}`);
  }
});

const sortButton = document.querySelector(".sort-button p");
const sortMenu = document.querySelector(".sort-menu");

sortButton.addEventListener("click", () => {
  sortMenu.classList.toggle("open");
});

sortMenu.addEventListener("click", (e) => {
  if (e.target.id) {
    window.location.assign(`pages/movies/movies.html?sort=${e.target.id}`);
  }
});

document.addEventListener("click", (e) => {
  if (!sortMenu.contains(e.target) && !sortButton.contains(e.target)) {
    sortMenu.classList.remove("open");
  }
});

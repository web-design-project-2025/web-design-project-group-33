import { ReviewComponent as Review } from "../../components/reviewComponent.js";
import { getMovies } from "../../api/movieData.js";
import { getReviews } from "../../api/reviewData.js";

const container = document.querySelector(".review-container");

const reviews = await getReviews();

const movies = await getMovies();

const urlParams = new URLSearchParams(window.location.search);
const sort = urlParams.get("sort");

if (!sort) {
  window.location.assign("reviews.html?sort=trending");
}
if (sort === "newest") {
  // temporary
  reviews.sort((a, b) => a.likes - b.likes);
}
if (sort === "trending") {
  reviews.sort((a, b) => b.rating - a.rating);
}
if (sort === "top") {
  reviews.sort((a, b) => b.likes - a.likes);
}

reviews.forEach(async (review) => {
  const movie = movies.find((movie) => movie.id === review.movie_id);
  container.appendChild(await Review(review, movie));
});

const sortButton = document.querySelector(".sort-button p");
const sortMenu = document.querySelector(".sort-menu");

sortButton.addEventListener("click", () => {
  sortMenu.classList.toggle("open");
});

sortMenu.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.id) {
    window.location.assign(`reviews.html?sort=${e.target.id}`);
  }
});

document.addEventListener("click", (e) => {
  if (!sortMenu.contains(e.target) && !sortButton.contains(e.target)) {
    sortMenu.classList.remove("open");
  }
});

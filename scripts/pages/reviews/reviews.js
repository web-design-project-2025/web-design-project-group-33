import { ReviewComponent as Review } from "../../components/reviewComponent.js";
import { getMovies } from "../../api/movieData.js";

const container = document.querySelector(".review-container");
const title = document.querySelector(".section-title");

const reviews = await fetch("/data/reviews.json")
  .then((res) => res.json())
  .then((data) => data);

const movies = await getMovies();

const urlParams = new URLSearchParams(window.location.search);
const sort = urlParams.get("sort");

if (!sort) {
  window.location.assign("reviews.html?sort=trending");
  title.textContent = "Trending Reviews";
}
if (sort === "newest") {
  // temporary
  reviews.sort((a, b) => a.likes - b.likes);
  title.textContent = "Newest Reviews";
}
if (sort === "trending") {
  reviews.sort((a, b) => b.rating - a.rating);
  title.textContent = "Trending Reviews";
}
if (sort === "top") {
  reviews.sort((a, b) => b.likes - a.likes);
  title.textContent = "Top Reviews";
}

reviews.forEach(async (review, index) => {
  const movie = movies.find((movie) => movie.id === review.movie_id);

  const reviewElement = await Review(review, movie);
  reviewElement.style.animationDelay = `${index * 100}ms`;

  container.appendChild(reviewElement);
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

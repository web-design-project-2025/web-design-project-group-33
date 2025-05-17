import { ReviewComponent as Review } from "../../components/reviewComponent.js";
import { getMovies } from "../../api/movieData.js";
import { getReviews } from "../../api/reviewData.js";

const container = document.querySelector(".review-container");
const title = document.querySelector(".section-title");

const reviews = await getReviews();

const movies = await getMovies();

const urlParams = new URLSearchParams(window.location.search);
const sort = urlParams.get("sort");
console.log(urlParams);
if (window.location.pathname.includes("/pages/reviews/reviews.html")) {
  if (!sort) {
    window.location.assign("pages/reviews/reviews.html?sort=trending");
    title.textContent = "Trending";
  }
  if (sort === "newest") {
    // temporary
    reviews.sort((a, b) => a.likes - b.likes);
    title.textContent = "Newest";
  }
  if (sort === "trending") {
    reviews.sort((a, b) => b.rating - a.rating);
    title.textContent = "Trending";
  }
  if (sort === "top") {
    reviews.sort((a, b) => b.likes - a.likes);
    title.textContent = "Most Liked";
  }
} else {
  const button = document.querySelector(".sort-button");
  button.classList.add("disabled");

  reviews.splice(5);
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
    window.location.assign(`pages/reviews/reviews.html?sort=${e.target.id}`);
  }
});

document.addEventListener("click", (e) => {
  if (!sortMenu.contains(e.target) && !sortButton.contains(e.target)) {
    sortMenu.classList.remove("open");
  }
});

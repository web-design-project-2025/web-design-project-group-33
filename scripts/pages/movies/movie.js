import { ReviewComponent as Review } from "../../components/reviewComponent.js";
import { ReviewTextBox as ReviewForm } from "../../components/reviewTextBox.js";
import { getMovies } from "../../api/movieData.js";
import { getReviews, postReview } from "../../api/reviewData.js";
import { showToast, userId } from "../../main.js";

const reviewContainer = document.getElementById("reviews");

const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get("id"), 10);
const movies = await getMovies();

const movie = movies.find((movie) => movie.id === movieId);

const poster = document.querySelector(".poster");
const title = document.querySelector(".title");
const description = document.querySelector(".description");

document.title = `${movie.title} (${movie.releaseDate.match(/^\d{4}/)[0]})`;
poster.src = movie.poster;
title.innerText = movie.title;
description.innerText = movie.description;

const releaseDate = document.createElement("span");
releaseDate.innerHTML = movie.releaseDate.match(/^\d{4}/)[0];
title.appendChild(releaseDate);

const cast = await fetch("data/cast.json")
  .then((res) => res.json())
  .then((data) => data);

const director = document.querySelector(".director");
const stars = document.querySelector(".stars");

const movieCast = cast.find((c) => c.movie_id === movieId);

director.innerText = movieCast.director;
stars.innerText = movieCast.top_actors.join(", ");

const reviewData = await getReviews();
const reviews = [];
reviewData.forEach((review) => {
  if (review.movie_id === movieId) {
    reviews.push(review);
  }
});

reviews.forEach(async (review, index) => {
  const reviewElement = await Review(review, movie);
  reviewElement.style.animationDelay = `${index * 100}ms`;
  reviewContainer.appendChild(reviewElement);
});

const formWrapper = document.querySelector(".form-wrapper");
const reviewForm = ReviewForm();
formWrapper.appendChild(reviewForm);

const reviewButton = document.querySelector(".write-review-button");
reviewButton.addEventListener("click", (e) => {
  document.body.style.overflowY = "hidden";
  formWrapper.classList.add("open");
});

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = document.getElementById("reviewContent");
  const rating = document.getElementById("ratingValue");

  if (rating.value === "") {
    showToast("Rating Empty!", "error");
  }
  if (content.value === "") {
    showToast("Review Empty!", "error");
  }
  if (rating.value !== "" && content.value !== "") {
    console.log("reviewposted");
    const id = reviewData[reviewData.length - 1].id + 1; //bad fix deluxe but we not using uuid soooo...
    postReview({
      id,
      user_id: userId,
      movie_id: movieId,
      rating: rating.value,
      content: content.value,
      likes: 0,
    });
    content.value = "";
    rating.value = "";
    const rateButtons = document.querySelectorAll(
      ".review-text-box .rate-button"
    );
    rateButtons.forEach((b) => (b.id = "deselected"));
    formWrapper.classList.remove("open");
    document.body.style.overflowY = "auto";
    showToast("Posted!", "success");
  }
});

document.addEventListener("click", (e) => {
  if (e.target === formWrapper) {
    formWrapper.classList.remove("open");
    document.body.style.overflowY = "auto";
  }
});
const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
const avgRating = Math.floor(totalRating / reviews.length);

function applyRating(containerSelector) {
  const container = document.querySelector(containerSelector);

  const cirlces = container.querySelectorAll(".rate-button");
  cirlces.forEach((span, index) => {
    if (index < avgRating) {
      span.id = "selected";
    }
  });
}

applyRating(".rating-circles-text-container");
applyRating(".rating-circles-text-container-mobile");

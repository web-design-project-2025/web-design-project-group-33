import { ReviewComponent } from "../../components/reviewComponent.js";
import { ReviewTextBox as ReviewForm } from "../../components/reviewTextBox.js";
import { getMovies } from "../../api/movieData.js";
import { getReviews, postReview } from "../../api/reviewData.js";

const reviewContainer = document.getElementById("reviews");

const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get("id"), 10);
const movies = await getMovies();

const movie = movies.find((movie) => movie.id === movieId);

const poster = document.querySelector(".poster");
const title = document.querySelector(".title");
const director = document.querySelector(".director");
const stars = document.querySelector(".stars");
const description = document.querySelector(".description");

document.title = `${movie.title} (${movie.releaseDate.match(/^\d{4}/)[0]})`;
poster.src = movie.poster;
title.innerText = movie.title;
director.innerText = movie.director;
stars.innerText = movie.stars;
description.innerText = movie.description;

const releaseDate = document.createElement("span");
releaseDate.innerHTML = movie.releaseDate.match(/^\d{4}/)[0];
title.appendChild(releaseDate);

const reviewData = await getReviews();
const reviews = [];
reviewData.forEach((review) => {
  if (review.movie_id === movieId) {
    reviews.push(review);
  }
});

reviews.forEach(async (review) => {
  reviewContainer.appendChild(await ReviewComponent(review));
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

  if (rating !== "" && content !== "") {
    console.log("reviewposted");
    const user_id = 1;
    const id = reviewData[reviewData.length - 1].id + 1; //bad fix deluxe but we not using uuid soooo...
    postReview({
      id,
      user_id,
      movie_id: movieId,
      rating: rating.value,
      content: content.value,
      likes: 0,
    });
    content.value = "";
    rating.value = "";
    formWrapper.classList.remove("open");
    document.body.style.overflowY = "auto";
  }
});

document.addEventListener("click", (e) => {
  if (e.target === formWrapper) {
    formWrapper.classList.remove("open");
    document.body.style.overflowY = "auto";
  }
});

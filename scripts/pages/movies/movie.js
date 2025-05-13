import { ReviewComponent } from "../../components/reviewComponent.js";
import { getMovies } from "../../api/movieData.js";

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

const reviews = await fetch("/data/reviews.json")
  .then((res) => res.json())
  .then((data) => {
    const arr = [];
    data.forEach((review) => {
      if (review.movie_id === movieId) {
        arr.push(review);
      }
    });
    return arr;
  });

reviews.forEach(async (review) => {
  reviewContainer.appendChild(await ReviewComponent(review, movie));
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

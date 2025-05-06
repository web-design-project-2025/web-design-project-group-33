import { ReviewComponent } from "../../components/reviewComponent.js";
import { getMovies } from "../../api/movieData.js";

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

poster.src = movie.poster;
title.innerText = movie.title;
director.innerText = movie.director;
stars.innerText = movie.stars;
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
  reviewContainer.appendChild(await ReviewComponent(review));
});

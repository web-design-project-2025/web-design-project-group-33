import { getMovies } from "../api/movieData.js";

export async function ReviewComponent(review, movie) {
  const reviewComponent = document.createElement("div");
  reviewComponent.className = "review-component";

  const users = await fetch("/data/users.json")
    .then((res) => res.json())
    .then((data) => data);

  const user = users.find((user) => user.id === review.user_id);
  const releaseYear = movie.releaseDate.match(/^\d{4}/)[0];

  reviewComponent.innerHTML = `  
        <article class="review-component-container">
          <a href="../movies/movie.html?id=${review.movie_id}">
          <img
            src="${movie.poster}"
            alt="${movie.name} Poster"
            class="poster-review-component"
          />
          </a>
          <section class="review-content">
            <div class="picture-username-movietitle">
              <img src="${user.image}" alt="User Profile Picture" />
              <a href="../reviews/review.html?id=${review.id}">${user.name}</a>
              <a href="../movies/movie.html?id=${review.movie_id}" class="movie-title-review-component"
                ><span>${movie.title}</span> (${releaseYear})</a
              >
            </div>
            <p>
            ${review.content}
            </p>
            <div class="like-comment-share-rating">
              <button>
                <span>${review.likes}</span>
                <img src="/assets/icons/heart.svg" alt="Like Button" />
              </button>
              <button onclick="window.location.assign('review.html?id=${review.id}')">
                <img src="/assets/icons/comment.svg" alt="Comment Button" />
              </button>
              <button>
                <img src="/assets/icons/share.svg" alt="Share Button" />
              </button>
              <div class="rating">
                <label for="Rating">Rating:</label>
                <span class="rate-button"></span>
                <span class="rate-button"></span>
                <span class="rate-button"></span>
                <span class="rate-button"></span>
                <span class="rate-button"></span>
              </div>
            </div>
            </section>
          </article>
          
          <div class="divider" />
        `;

  const rateButtons = reviewComponent.querySelectorAll(".rate-button");
  rateButtons.forEach((button, index) => {
    if (index < review.rating) {
      button.id = "selected";
    }
  });

  return reviewComponent;
}

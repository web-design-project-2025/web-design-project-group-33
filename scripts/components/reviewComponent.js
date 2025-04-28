export async function ReviewComponent(review) {
  const reviewComponent = document.createElement("div");
  reviewComponent.className = "review-component";

  fetch("/data/users.json")
    .then((res) => res.json())
    .then((data) => {
      const user = data.find((user) => user.id === review.user_id);
      reviewComponent.innerHTML = `  
        <article class="review-component-container">
          <img
            src="/assets/pictures/morbius-poster.jpg"
            alt="MovieName+Poster"
            class="poster-review-component"
          />
          <section class="review-content">
            <div class="picture-username-movietitle">
              <img src="${user.image}" alt="User Profile Picture" />
              <a href="">${user.name}</a>
              <a href="" class="movie-title-review-component"
                ><span>${review.movie_id}</span> (${review.movie_id})</a
              >
            </div>
            <p>
            ${review.content}
            </p>
            <div class="like-comment-share-rating">
              <button>
                <small>${review.likes}</small>
                <img src="/assets/icons/heart.svg" alt="Like Button" />
              </button>
              <button>
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
        `;

      const rateButtons = reviewComponent.querySelectorAll(".rate-button");
      rateButtons.forEach((button, index) => {
        if (index < review.rating) {
          button.id = "rated";
        }
      });
    });

  return reviewComponent;
}

export const ReviewComponent = (review) => {
  return `
    <article class="review-component-container">
      <img
        src="/assets/pictures/morbius-poster.jpg"
        alt="MovieName+Poster"
        class="poster-review-component"
      />
      <section class="review-content">
        <div class="picture-username-movietitle">
          <img src="/assets/pictures/guy.png" alt="User Profile Picture" />
          <a href="">DrainedLeto69</a>
          <a href="" class="movie-title-review-component"
            ><span>Morbius</span> (2022)</a
          >
        </div>
        <p>
          Morbius is like if someone turned a Hot Topic clearance rack into a
          movie. Jared Leto’s performance is so lifeless, I’m convinced he
          actually method-acted becoming a vampire and sucked the energy out of
          the entire script.
        </p>
        <div class="like-comment-share-rating">
          <button>
            <small>12k</small>
            <img src="/assets/icons/heart.svg" alt="Like Button" />
          </button>
          <button>
            <small>10</small>
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
};

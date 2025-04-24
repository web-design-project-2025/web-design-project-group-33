export const ReviewComponent = (review) => {
  return `
    <article class="reviewComponentContainer">
      <img
        src=""
        alt="MovieName+Poster"
        class="moviePosterReviewComponent"
      />
      <main>
        <div class="profilePictureNameTitle">
          <img src="/assets/pictures/guy.png" alt="User Profile Picture" />
          <h3>DrainedLeto69</h3>
          <h2 class="movieTitleReviewComponent"><span>Morbius</span> (2022)</h2>
        </div>
        <p>
          Morbius is like if someone turned a Hot Topic clearance rack into a
          movie. Jared Leto’s performance is so lifeless, I’m convinced he
          actually method-acted becoming a vampire and sucked the energy out of
          the entire script. Morbius is like if someone turned a Hot Topic
          clearance rack into a movie. Jared Leto’s performance is so lifeless,
          I’m convinced he actually method-acted becoming a vampire and sucked
          the energy out of the entire script.
        </p>
      </main>
      <div class="likeCommentShareRating">
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
    </article>
      `;
};

export const ReviewTextBox = (reviewTextBox) => {
  return `  
    <form class="review-text-box">
      <textarea placeholder="Write your review here..."></textarea>
      <div class="rating">
        <label for="Rating">Rating:</label>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <button class="button" type="submit">Post</button>
    </form>
      `;
};

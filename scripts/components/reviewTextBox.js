export const ReviewTextBox = () => {
  const reviewForm = document.createElement("form");
  reviewForm.className = "review-text-box";
  reviewForm.innerHTML = `  
      <textarea id="reviewContent" name="content" placeholder="Write your review here..."></textarea>
      <div class="rating">
        <label for="Rating">Rating:</label>
        <span class="rate-button"></span>
        <span class="rate-button"></span>
        <span class="rate-button"></span>
        <span class="rate-button"></span>
        <span class="rate-button"></span>
        <input type="hidden" name="rating" id="ratingValue" value=""/>
      </div>
      <button class="button" type="submit">Post</button>
      `;

  reviewForm.addEventListener("click", (e) => {
    if (e.target.className === "rate-button") {
      const buttons = document.querySelectorAll(
        ".review-text-box .rate-button"
      );
      const ratingValue = document.getElementById("ratingValue");

      buttons.forEach((button) => {
        button.id = "deselected";
      });

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].id = "selected";
        if (e.target === buttons[i]) {
          ratingValue.value = i + 1;
          return;
        }
      }
    }
  });

  return reviewForm;
};

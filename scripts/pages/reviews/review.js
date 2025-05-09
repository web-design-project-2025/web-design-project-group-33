import { ReviewComment } from "../../components/reviewComment.js";
import { ReviewComponent as Review } from "../../components/reviewComponent.js";

const reviewContainer = document.querySelector(".review-container");
const commentsContainer = document.querySelector(".comments-container");
const commentForm = document.querySelector(".comment-form");
const backButton = document.querySelector(".section-title");

const urlParams = new URLSearchParams(window.location.search);
const reviewId = parseInt(urlParams.get("id"), 10);

const review = await fetch("/data/reviews.json")
  .then((res) => res.json())
  .then((data) => {
    return data.find((review) => review.id === reviewId);
  });

const comments = await fetch("/data/comments.json")
  .then((res) => res.json())
  .then((data) => {
    const arr = [];
    data.forEach((comment) => {
      if (comment.review_id === reviewId) {
        arr.push(comment);
      }
    });
    return arr;
  });

reviewContainer.appendChild(await Review(review));

comments.forEach(async (comment) => {
  commentsContainer.appendChild(await ReviewComment(comment));
});

backButton.addEventListener("click", (e) => {
  history.back();
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("input");
  const value = input.value;
  input.value = "";

  console.log(value);
});

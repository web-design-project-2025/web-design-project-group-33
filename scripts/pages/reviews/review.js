import { getMovies } from "../../api/movieData.js";
import { ReviewComment } from "../../components/reviewComment.js";
import { ReviewComponent as Review } from "../../components/reviewComponent.js";
import { getComments, postComment } from "../../api/commentData.js";
import { showToast, userId } from "../../main.js";
import { getReviews } from "../../api/reviewData.js";

const reviewContainer = document.querySelector(".review-container");
const commentsContainer = document.querySelector(".comments-container");
const commentForm = document.querySelector(".comment-form");
const backButton = document.querySelector(".back-button");

const urlParams = new URLSearchParams(window.location.search);
const reviewId = parseInt(urlParams.get("id"), 10);

const reviewData = await getReviews();
const review = reviewData.find((review) => review.id === reviewId);

const movies = await getMovies();
const movie = movies.find((movie) => movie.id === review.movie_id);

const sectionTitle = document.querySelector(".section-title");
sectionTitle.innerText = `${movie.title}`;

reviewContainer.appendChild(await Review(review, movie));

const commentData = await getComments();
const comments = [];
commentData.forEach((comment) => {
  if (comment.review_id === reviewId) {
    comments.push(comment);
  }
});

comments.forEach(async (comment, index) => {
  const commentElement = await ReviewComment(comment);
  commentElement.style.animationDelay = `${index * 100}ms`;

  commentsContainer.appendChild(commentElement);
});

backButton.addEventListener("click", (e) => {
  if (document.referrer) {
    window.location.assign(document.referrer);
  } else {
    window.location.href = "/";
  }
});

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("input");
  const content = input.value;

  if (content === "") {
    showToast("Comment Empty", "error");
    return;
  }
  const id = commentData[commentData.length - 1].id + 1; //bad fix deluxe but we not using uuid soooo...
  postComment({
    id,
    user_id: userId,
    review_id: reviewId,
    content,
    likes: 0,
  });
  input.value = "";
  showToast("Posted!", "success");
});

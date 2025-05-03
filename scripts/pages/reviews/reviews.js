import { ReviewComponent as Review } from "../../components/reviewComponent.js";

const container = document.querySelector(".review-container");

const reviews = await fetch("/data/reviews.json")
  .then((res) => res.json())
  .then((data) => data);

reviews.forEach(async (reviewData) => {
  const review = await Review(reviewData);
  container.appendChild(review);
});

const sortButton = document.querySelector(".sort-button p");
const sortMenu = document.querySelector(".sort-menu");

sortButton.addEventListener("click", () => {
  sortMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!sortMenu.contains(e.target) && !sortButton.contains(e.target)) {
    sortMenu.classList.remove("open");
  }
});

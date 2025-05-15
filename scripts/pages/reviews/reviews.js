import { ReviewComponent as Review } from "../../components/reviewComponent.js";

const container = document.querySelector(".review-container");

const reviews = await fetch("/data/reviews.json")
  .then((res) => res.json())
  .then((data) => data);

const urlParams = new URLSearchParams(window.location.search);
const sort = urlParams.get("sort");
console.log(urlParams);
if (window.location.pathname.includes("/pages/reviews/reviews.html")) {
  if (!sort) {
    window.location.assign("reviews.html?sort=trending");
  }
  if (sort === "newest") {
    // temporary
    reviews.sort((a, b) => a.likes - b.likes);
  }
  if (sort === "trending") {
    reviews.sort((a, b) => b.rating - a.rating);
  }
  if (sort === "top") {
    reviews.sort((a, b) => b.likes - a.likes);
  }
} else {
  const button = document.querySelector(".sort-button")
  button.classList.add("disabled")

  reviews.splice(5)
}

reviews.forEach(async (reviewData) => {
  const review = await Review(reviewData);
  container.appendChild(review);
});

const sortButton = document.querySelector(".sort-button p");
const sortMenu = document.querySelector(".sort-menu");

sortButton.addEventListener("click", () => {
  sortMenu.classList.toggle("open");
});

sortMenu.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.id) {
    window.location.assign(`reviews.html?sort=${e.target.id}`);
  }
});

document.addEventListener("click", (e) => {
  if (!sortMenu.contains(e.target) && !sortButton.contains(e.target)) {
    sortMenu.classList.remove("open");
  }
});

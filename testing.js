import { MovieCard } from "./scripts/components/movieCard.js";
import { ReviewComponent } from "./scripts/components/reviewComponent.js";

//example data
const movies = [
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
];

//example usage of moviecard
document.getElementById("app").innerHTML = `
        <h1 style="color:white">Movies</h1>
        <div style="display:flex;flex-direction:row;gap:16px;">
            ${movies.map((movie) => MovieCard(movie)).join("")}
        </div>
    `;

fetch("/data/reviews.json")
  .then((res) => res.json())
  .then((reviews) => {
    reviews.forEach(async (reviewData) => {
      const review = await ReviewComponent(reviewData);
      document.getElementById("reviews").appendChild(review);
    });
  });

import { MovieCard } from "./scripts/components/movieCard.js";
import { ReviewTextBox } from "./scripts/components/reviewTextBox.js";
import { ReviewComment } from "./scripts/components/reviewComment.js";

//example data
const movies = [
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
  { title: "Example Title", poster: "example.jpg" },
];

// example usage of moviecard
document.getElementById("app").innerHTML = `
      <h1 style="color:white">Movies</h1>
      <div style="display:flex;flex-direction:row;gap:16px;">
          ${movies.map((movie) => MovieCard(movie)).join("")}
      </div>
  `;

const TextBox = ReviewTextBox();
document.getElementById("app").appendChild(TextBox);

const mockComments = [
  {
    id: 1,
    user_id: 1,
    review_id: 1,
    content: "this movie sucks",
  },
  {
    id: 2,
    user_id: 2,
    review_id: 1,
    content: "yeah i know right",
  },
  {
    id: 3,
    user_id: 3,
    review_id: 1,
    content: "yes my guy",
  },
  {
    id: 4,
    user_id: 4,
    review_id: 1,
    content:
      "moviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemoviemovie",
  },
];

//comments example, this one needs async
mockComments.forEach(async (mockComment) => {
  const comment = await ReviewComment(mockComment);
  document.getElementById("comments").appendChild(comment);
});

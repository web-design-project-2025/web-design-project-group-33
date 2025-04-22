import { MovieCard } from "./scripts/components/movieCard.js";

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

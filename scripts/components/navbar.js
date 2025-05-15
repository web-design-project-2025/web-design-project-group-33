import { getMovies } from "../api/movieData.js";

/* Use these in the HTML
<script type="module" src="/scripts/main.js"></script>
<nav id="navbar-component"></nav>
*/

export async function NavbarComponent() {
  const navbarComponent = document.createElement("div");
  navbarComponent.className = "different-navbar-components";
  navbarComponent.innerHTML = `  
   <nav class="navbar">
      <a href="/index.html">
        <img
          src="/assets/icons/movie-roast-darkbg.svg"
          alt="Movie-roast-logo"
          class="logo"
        />
      </a>
      <div class="nav-links">
        <a href="/pages/reviews/reviews.html">Reviews</a>
        <a href="/pages/movies/movies.html">Movies</a>
        <a href="/pages/blog/blog.html">Blog</a>
        <form class="searchbar-wrapper">
          <input id="searchbar" class="searchbar" type="text" placeholder="Search..." value="" />
          <div class="search-menu">
          <ul id="movies"></ul>
          </div>
        </form>
      </div>
      <a id="profile-icon" href="/pages/profile/profile.html">
        <img
          src="/assets/pictures/profil.jpg"
          alt="Profile Picture"
          class="profile-pic"
        />
      </a>
    </nav>
    <nav class="mobile-bottom-navbar">
      <button class="hamburger" id="hamburger-btn">☰</button>
      <img src="/assets/icons/search.svg" alt="" class="search" id="search-button"/>
      <a id="profile-icon" href="/pages/profile/profile.html">
        <img
          src="/assets/pictures/profil.jpg"
          alt="Profile Picture"
          class="profile-pic"
        />
      </a>
    </nav>
    <div id="mobile-menu" class="mobile-menu">
      <img
        src="/assets/icons/movie-roast-small.svg"
        alt="logo hamburger"
        class="logo-burger"
      />
      <div class="links">
        <a href="/pages/reviews/reviews.html">Reviews</a>
        <a href="/pages/movies/movies.html">Movies</a>
        <a href="/pages/blog/blog.html">Blog</a>
        <a href="/pages/profile/profile.html">Profile</a>
      </div>
    </div>
    `;

  const hamburgerBtn = navbarComponent.querySelector("#hamburger-btn");
  const mobileMenu = navbarComponent.querySelector("#mobile-menu");

  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      mobileMenu.classList.remove("open");
    }
  });

  navbarComponent.addEventListener("click", (e) => {
    const movie = e.target.closest(".search-menu ul#movies li");
    if (movie) {
      window.location.assign(`/pages/movies/movie.html?id=${movie.id}`);
    }
  });

  const searchButton = navbarComponent.querySelector("#search-button");
  const logo = navbarComponent.querySelector(".navbar .logo");
  const searchbarMobile = navbarComponent.querySelector(".navbar .searchbar");

  document.addEventListener("click", (e) => {
    if (e.target === searchButton) {
      logo.classList.toggle("logo-hidden");
      searchbarMobile.classList.toggle("searchbar-visible");
    }
  });

  function MovieResult(movie) {
    const item = document.createElement("li");
    item.id = movie.id;
    item.innerHTML = `
    <img src="${movie.poster}"/>
    <p>${movie.title}</p>
    `;
    return item;
  }

  const movies = await getMovies();

  const searchbar = navbarComponent.querySelector("#searchbar");
  searchbar.addEventListener("input", (e) => {
    const movieResults = navbarComponent.querySelector(
      ".search-menu ul#movies"
    );
    movieResults.innerHTML = "";
    const value = searchbar.value.toLowerCase();
    if (value.length >= 3) {
      movies.forEach((movie) => {
        const title = movie.title.toLowerCase();
        if (title.includes(value)) {
          movieResults.appendChild(MovieResult(movie));
        }
      });
    }
  });

  const searchMenu = navbarComponent.querySelector(".search-menu");

  searchbar.addEventListener("click", (e) => {
    searchMenu.classList.add("open");
  });

  document.addEventListener("click", (e) => {
    if (!searchMenu.contains(e.target) && !searchbar.contains(e.target)) {
      searchMenu.classList.remove("open");
    }
  });

  return navbarComponent;
}

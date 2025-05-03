/* Use these in the HTML
<script type="module" src="/scripts/main.js"></script>
<nav id="navbar-component"></nav>
*/

export function NavbarComponent() {
  const navbarComponent = document.createElement("div");
  navbarComponent.className = "different-navbar-components";
  navbarComponent.innerHTML = `  
    <nav class="navbar">
      <a href="index.html">
        <img
          src="/assets/icons/movie-roast-darkbg.svg"
          alt="Movie-roast-logo"
          class="logo"
        />
      </a>
      <a href="/pages/reviews/reviews.html">Reviews</a>
      <a href="/pages/movies/movies.html">Movies</a>
      <a href="/about.html">About</a>
      <input id="searchbar" type="text" placeholder="Search..." />
      <div id="profile-pic-container">
        <a id="profile-icon" href="/pages/profile/profile.html">
          <img
            src="/assets/pictures/profil.jpg"
            alt="Profile Picture"
            class="profile-pic"
          />
        </a>
      </div>
    </nav>
    <div class="mobile-top-bar">
      <a href="/index.html">
        <img
          src="/assets/icons/movie-roast-darkbg.svg"
          alt="Movie-roast-logo"
          class="mobile-logo"
        />
      </a>
    </div>
    <nav class="mobile-bottom-navbar">
      <button class="hamburger" id="hamburger-btn">☰</button>
      <img src="/assets/icons/search.svg" alt="" class="search" />
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
        <a href="/about.html">About</a>
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

  return navbarComponent;
}

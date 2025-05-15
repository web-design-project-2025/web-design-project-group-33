/* Use these in the HTML
<script type="module" src="/scripts/main.js"></script>
<footer id="footer-component"></footer>
*/

export function FooterComponent() {
  const footerComponent = document.createElement("div");
  footerComponent.className = "footer-container-links";
  footerComponent.innerHTML = `  
        <div class="footer-container-logos">
          <ul class="footer-ul">
            <li>
              <img
                src="/assets/icons/movie-roast-darkbg.svg"
                alt="Movie Roast LOGO"
                id="footer-movie-roast-logo"
              />
            </li>
            <li class="footer-text">
              Bad taste is everywhere—especially yours. But don't worry, someone
              else's is worse. Scroll up, roast a movie, and feel slightly
              better about yourself..
            </li>
          </ul>
          <ul class="footer-ul">
            <li>Powered By:</li>
            <a href="https://www.themoviedb.org/">
              <img
                src="/assets/icons/themoviedb-logo.svg"
                alt="The Movie DB LOGO"
                id="footer-movie-db-logo"
            /></a>
          </ul>
        </div>
        <ul class="footer-ul">
          <li><h3>Navigation</h3></li>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/pages/reviews/reviews.html">Reviews</a></li>
          <li><a href="/pages/movies/movies.html">Movies</a></li>
          <li><a href="/pages/blog/blog.html">Blog</a></li>
          <li><a href="/about.html">About</a></li>
        </ul>
        <ul class="footer-ul">
          <li><h3>Socials</h3></li>
          <li><a href="/index.html">Instagram</a></li>
          <li><a href="/index.html">FaceBook</a></li>
          <li><a href="/index.html">Twitter</a></li>
          <li><a href="/index.html">TikTok</a></li>
          <li><a href="/index.html">YouTube</a></li>
        </ul>
        <ul class="footer-ul">
          <li><h3>Contact</h3></li>
          <li>business@movieroast.com</li>
          <li>Jönköping</li>
        </ul>
      `;

  return footerComponent;
}

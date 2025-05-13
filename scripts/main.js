import { NavbarComponent } from "/scripts/components/navbar.js";
import { FooterComponent } from "/scripts/components/footer.js";

const navbarElement = await NavbarComponent();
document.getElementById("navbar-component").appendChild(navbarElement);

const footerElement = FooterComponent();
document.getElementById("footer-component").appendChild(footerElement);

const backgroundWrapper = document.createElement("div");
backgroundWrapper.className = "background-wrapper";
const backgroundGraphic = document.createElement("img");
backgroundGraphic.src = "/assets/icons/side-element.svg";
backgroundGraphic.className = "background-graphic";
backgroundWrapper.appendChild(backgroundGraphic);

if (document.body.id !== "home-page") {
  document.body.appendChild(backgroundWrapper);

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollProgress = scrollY / scrollableHeight;
    const imageHeight = backgroundGraphic.offsetHeight;
    const maxTranslate = imageHeight - window.innerHeight + 140; //number = navbar offset
    const translateY = scrollProgress * maxTranslate;

    if (scrollableHeight <= 0 || scrollableHeight < maxTranslate) {
      backgroundGraphic.style.transform = `translateY(0px)`;
      return;
    }

    backgroundGraphic.style.transform = `translateY(-${translateY}px)`;
  });
}

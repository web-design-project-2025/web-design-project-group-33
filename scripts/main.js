import { NavbarComponent } from "/scripts/components/navbar.js";
import { FooterComponent } from "/scripts/components/footer.js";

const navbarElement = await NavbarComponent();
document.getElementById("navbar-component").appendChild(navbarElement);

const footerElement = FooterComponent();
document.getElementById("footer-component").appendChild(footerElement);

setTimeout(() => {
  document.querySelector("footer").classList.add("visible");
}, 100);

const toast = document.createElement("div");
toast.classList.add("toast");
document.body.appendChild(toast);

export function showToast(message, type) {
  toast.textContent = message;
  toast.id = type;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 1500);
}

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

import { NavbarComponent } from "./components/navbar.js";
import { FooterComponent } from "./components/footer.js";

if (!localStorage.getItem("current_user")) {
  localStorage.setItem("current_user", JSON.stringify(10));
}

export const userId = JSON.parse(localStorage.getItem("current_user"));

const navbarElement = await NavbarComponent();
document.getElementById("navbar-component").appendChild(navbarElement);

const footerElement = FooterComponent();
document.getElementById("footer-component").appendChild(footerElement);

setTimeout(() => {
  document.querySelector("footer").classList.add("visible");
}, 100);

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".homepage-cover-photo");
let current = 0;

if (slider) {
  setInterval(() => {
    current = (current + 1) % slides.length;
    const slide = slides[current];
    slider.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  }, 6000);
}

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
backgroundGraphic.src = "assets/icons/side-element.svg";
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

import { NavbarComponent } from "/scripts/components/navbar.js";
import { FooterComponent } from "/scripts/components/footer.js";


const navbarElement = await NavbarComponent();
document.getElementById("navbar-component").appendChild(navbarElement);

const footerElement = FooterComponent();
document.getElementById("footer-component").appendChild(footerElement);

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".homepage-cover-photo");
let current = 0;

setInterval(() => {
current = (current + 1) % slides.length;
const slide = slides [current];
slider.scrollTo({
    left: slide.offsetLeft,
    behavior: "smooth",
});
},6000);
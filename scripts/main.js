import { NavbarComponent } from "/scripts/components/navbar.js";
import { FooterComponent } from "/scripts/components/footer.js";

const navbarElement = NavbarComponent();
document.getElementById("navbar-component").appendChild(navbarElement);

const footerElement = FooterComponent();
document.getElementById("footer-component").appendChild(footerElement);

const toast = document.createElement("div");
toast.classList.add("toast", "hidden");
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

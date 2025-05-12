import { NavbarComponent } from "/scripts/components/navbar.js";
import { FooterComponent } from "/scripts/components/footer.js";

const navbarElement = NavbarComponent();
document.getElementById("navbar-component").appendChild(navbarElement);

const footerElement = FooterComponent();
document.getElementById("footer-component").appendChild(footerElement);

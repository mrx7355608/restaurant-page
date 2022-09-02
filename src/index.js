// Components
import footer from "./components/footer";
import navbar from "./components/navbar";

// Pages
import home from "./pages/home";

// CSS
import "./assets/stylesheets/main.css";
import "./assets/stylesheets/homepage.css";
import "./assets/stylesheets/aboutpage.css";
import "./assets/stylesheets/menupage.css";

function main() {
    const container = document.querySelector("#content");

    // Navbar
    const Navbar = navbar();
    document.body.appendChild(Navbar);

    // Content
    const homePage = home();
    container.appendChild(homePage);

    return container;
}
document.body.appendChild(main());
document.body.appendChild(footer());

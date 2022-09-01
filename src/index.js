// Components
import footer from "./components/footer";
import navbar from "./components/navbar";

import "./assets/stylesheets/main.css";
import home from "./pages/home";
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

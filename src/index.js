import homePage from "./homePage";
import menuPage from "./menupage";
import contactPage from "./contactPage";

import "./assets/stylesheets/main.css";

function Main() {
    const content = document.querySelector("#content");

    // Homepage
    const home = homePage();

    // Menupage
    const menu = menuPage();

    // Contactpage
    const contact = contactPage();

    document.querySelector("#menu").addEventListener("click", () => {
        Array.from(content.children).forEach((elem) => elem.remove());
        content.appendChild(menu);
    });
    document.querySelector("#contact").addEventListener("click", () => {
        Array.from(content.children).forEach((elem) => elem.remove());
        content.appendChild(contact);
    });
    document.querySelector("#home").addEventListener("click", () => {
        Array.from(content.children).forEach((elem) => elem.remove());
        content.appendChild(home);
    });

    document.title = "Restaurant";
    content.appendChild(home);
}
Main();

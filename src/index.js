// Components
import footer from "./components/footer";
import navbar from "./components/navbar";

import "./assets/stylesheets/main.css";
function main() {
    const container = document.querySelector("#content");
    return container;
}
document.body.appendChild(navbar());
document.body.appendChild(main());
document.body.appendChild(footer());

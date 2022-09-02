import DomHandler from "../domHandler";
// Menu items data
import menuItems from "../data/menuItems";
// Components
import itemCard from "../components/itemCard";

export default function menu() {
    const dom = new DomHandler();
    const menuContainer = dom.createDiv();
    const menuHeading = dom.createHeading("MENU", "h1");
    menuContainer.classList.add("menu");
    menuHeading.classList.add("menu_heading");

    document.querySelector("#content").appendChild(menuHeading);
    menuItems.items.forEach((item) => {
        const card = itemCard(item);
        menuContainer.appendChild(card);
    });
    return menuContainer;
}

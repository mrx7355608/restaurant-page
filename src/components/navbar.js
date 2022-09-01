import logo from "../assets/images/logo.png";
import DomHandler from "../domHandler";

export default function navbar() {
    const dom = new DomHandler();

    const container = dom.createHeader();

    // Nav
    const nav = dom.createNav();
    const brandContainer = dom.createDiv();
    const brandName = dom.createHeading("Restaurant", "h3");
    const button = dom.createButton("ORDER");
    const brandLogo = new Image();
    dom.addAttributes(brandContainer, { class: "brand" });
    dom.addAttributes(brandLogo, { src: logo, width: "30", class: "logo" });
    dom.addAttributes(brandName, { class: "brand_name" });
    dom.addAttributes(button, { class: "cta" });

    // Navbar links
    const links = dom.createUnorderedList();
    const navLink_home = dom.createLinkItem("Home");
    const navLink_about = dom.createLinkItem("About");
    const navLink_menu = dom.createLinkItem("Menu");
    dom.addAttributes(links, { class: "list" });
    dom.addAttributes(navLink_home, { class: "list_item" });
    dom.addAttributes(navLink_menu, { class: "list_item" });
    dom.addAttributes(navLink_about, { class: "list_item" });

    brandContainer.append(brandLogo, brandName);
    links.append(navLink_home, navLink_menu, navLink_about);
    nav.append(brandContainer, links, button);
    container.appendChild(nav);
    return container;
}

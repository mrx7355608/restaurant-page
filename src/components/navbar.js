import DomHandler from "../domHandler";

import logo from "../assets/images/logo.png";

import about from "../pages/about";
import home from "../pages/home";
import menu from "../pages/menu";

export default function navbar() {
    const dom = new DomHandler();

    const container = dom.createHeader();
    // Nav
    const nav = dom.createNav();
    // brand
    const brandContainer = dom.createDiv();
    const brandName = dom.createHeading("Restaurant", "h3");
    const brandLogo = new Image();
    // links
    const links = dom.createUnorderedList();
    const navLink_home = dom.createLinkItem("Home");
    const navLink_about = dom.createLinkItem("About");
    const navLink_menu = dom.createLinkItem("Menu");
    // button
    const button = dom.createButton("ORDER");

    dom.addAttributes(brandContainer, { class: "brand" });
    dom.addAttributes(brandLogo, { src: logo, width: "30", class: "logo" });
    dom.addAttributes(brandName, { class: "brand_name" });
    dom.addAttributes(button, { class: "cta" });
    dom.addAttributes(links, { class: "list" });
    dom.addAttributes(navLink_home, { class: "list_item" });
    dom.addAttributes(navLink_menu, { class: "list_item" });
    dom.addAttributes(navLink_about, { class: "list_item" });

    // Adding "click" event listeners on nav links for navigation
    dom.bindClickListener(navLink_home, () => dom.renderPage(home));
    dom.bindClickListener(navLink_menu, () => dom.renderPage(menu));
    dom.bindClickListener(navLink_about, () => dom.renderPage(about));

    brandContainer.append(brandLogo, brandName);
    links.append(navLink_home, navLink_menu, navLink_about);
    nav.append(brandContainer, links, button);
    container.appendChild(nav);
    return container;
}

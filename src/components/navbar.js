import brandLogo from "../assets/images/logo.png";

export default function navbar() {
    const container = document.createElement("header");

    // Nav
    const nav = document.createElement("nav");

    // Navbar Logo
    const logo = new Image();
    logo.classList.add("logo");
    logo.src = brandLogo;
    logo.width = "30";

    // Navbar Brand
    const brandContainer = document.createElement("div");
    const brandName = document.createElement("h3");

    brandContainer.classList.add("brand");
    brandName.classList.add("brand_name");

    brandName.innerText = "Restaurant";

    // Navbar links
    const links = document.createElement("ul");
    links.classList.add("list");
    const navLink_home = document.createElement("li");
    const navLink_about = document.createElement("li");
    const navLink_menu = document.createElement("li");
    navLink_home.classList.add("list_item");
    navLink_menu.classList.add("list_item");
    navLink_about.classList.add("list_item");

    navLink_home.innerText = "Home";
    navLink_menu.innerText = "Menu";
    navLink_about.innerText = "About";

    // Navbar button
    const button = document.createElement("button");
    button.innerText = "ORDER";
    button.classList.add("cta");

    brandContainer.appendChild(logo);
    brandContainer.appendChild(brandName);

    links.appendChild(navLink_home);
    links.appendChild(navLink_menu);
    links.appendChild(navLink_about);

    nav.appendChild(brandContainer);
    nav.appendChild(links);
    nav.appendChild(button);

    container.appendChild(nav);
    return container;
}

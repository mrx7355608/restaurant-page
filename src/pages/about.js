import DomHandler from "../domHandler";

import facebook from "../assets/images/icons/facebook.png";
import instagram from "../assets/images/icons/instagram.png";
import twitter from "../assets/images/icons/twitter.png";

export default function about() {
    const dom = new DomHandler();
    const container = dom.createDiv();
    dom.addAttributes(container, { class: "about" });
    const heading = dom.createHeading("ABOUT", "h1");
    const para = dom.createPara("We are");

    const socialLinks = dom.createDiv();
    socialLinks.classList.add("social_links");
    const fb = new Image();
    const insta = new Image();
    const twit = new Image();
    dom.addAttributes(fb, { src: facebook, width: "32" });
    dom.addAttributes(insta, { src: instagram, width: "32" });
    dom.addAttributes(twit, { src: twitter, width: "32" });
    socialLinks.append(fb, insta, twit);

    container.append(heading, para, socialLinks);
    return container;
}

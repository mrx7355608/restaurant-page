import DomHandler from "../domHandler";

// Icons
import facebook from "../assets/images/icons/facebook.png";
import instagram from "../assets/images/icons/instagram.png";
import twitter from "../assets/images/icons/twitter.png";

export default function about() {
    const dom = new DomHandler();
    const container = dom.createDiv();
    const heading = dom.createHeading("ABOUT", "h1");
    const para = dom.createPara(
        "We provide humanity a well balanced and healthy food. We see junk food spreading everywhere and people having health issues, so we felt a need for providing everyone a healthy food. This restaurant was established in order to serve humanity."
    );
    const socialLinks = dom.createDiv();

    const fb = new Image();
    const insta = new Image();
    const twit = new Image();
    socialLinks.classList.add("social_links");
    dom.addAttributes(container, { class: "about" });
    dom.addAttributes(fb, { src: facebook, width: "32" });
    dom.addAttributes(insta, { src: instagram, width: "32" });
    dom.addAttributes(twit, { src: twitter, width: "32" });

    socialLinks.append(fb, insta, twit);
    container.append(heading, para, socialLinks);
    return container;
}

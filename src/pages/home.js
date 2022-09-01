import DomHandler from "../domHandler";

import heroImage from "../assets/images/healthy food.png";

export default function home() {
    const dom = new DomHandler();

    const heroContainer = dom.createDiv();
    dom.addAttributes(heroContainer, { class: "hero" });
    const heroContent = dom.createDiv();
    dom.addAttributes(heroContent, { class: "hero_content" });
    const heading = dom.createHeading("Eat Healthy, Stay Healthy", "h1");
    const paragraph = dom.createPara(
        "Our main goal is to provide you a well balanced and harm free food. We are concerned about your health, since in this era food is available but healthy food is very rare. So stop eating junk and order your healthy meal now!"
    );
    const ctaButton = dom.createButton("ORDER NOW");
    dom.addAttributes(ctaButton, { class: "hero_btn" });

    const image = new Image();
    image.src = heroImage;

    heroContent.append(heading, paragraph, ctaButton);
    heroContainer.append(heroContent, image);
    return heroContainer;
}

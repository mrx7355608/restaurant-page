import img from "./assets/images/introimg.jpg";
import img2 from "./assets/images/secondimg.png";

import "./assets/stylesheets/homepage.css";

function homePage() {
    // Changing title of the page
    // document.title = "Restaurant";

    const hero = document.createElement("div");
    hero.setAttribute("id", "hero");

    const heroContentContainer = document.createElement("div");
    heroContentContainer.setAttribute("id", "hero-content");

    const heroHeading = document.createElement("h1");
    heroHeading.innerText =
        "Say goodbye to your hunger with delicious foods by XFoodz";
    const heroContent = document.createElement("p");
    heroContent.innerText =
        "Feeling hungry? Want quality food with lower prices? and want your food to be delivered on time?, Then stop waiting and Order your food now on XFoodz";
    const heroOrderButton = document.createElement("button");
    heroOrderButton.innerText = "Order now";
    heroOrderButton.setAttribute("id", "order-btn");

    const heroImage = new Image();
    heroImage.src = img;
    const secondHeroImg = new Image();
    secondHeroImg.setAttribute("class", "hero-second-img");
    secondHeroImg.src = img2;

    heroContentContainer.appendChild(heroHeading);
    heroContentContainer.appendChild(heroContent);
    heroContentContainer.appendChild(heroOrderButton);
    hero.appendChild(heroContentContainer);
    hero.appendChild(heroImage);

    return hero;
}
export default homePage;

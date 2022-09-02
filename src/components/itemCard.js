import DomHandler from "../domHandler";

export default function itemCard({ img, name, desc }) {
    const dom = new DomHandler();

    const card = dom.createDiv();
    const itemImage = new Image();
    const itemName = dom.createHeading(name, "h3");
    const itemDesc = dom.createPara(`${desc.substring(0, 100)}...`);
    const readMoreButton = dom.createButton("Read more");

    card.classList.add("menu_item");
    itemImage.src = img;
    readMoreButton.classList.add("read_more_btn");

    card.append(itemImage, itemName, itemDesc, readMoreButton);
    return card;
}

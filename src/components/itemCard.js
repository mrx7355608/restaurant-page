import DomHandler from "../domHandler";

export default function itemCard({ img, name, desc }) {
    const dom = new DomHandler();

    const card = dom.createDiv();
    card.classList.add("menu_item");
    const itemImage = new Image();
    itemImage.src = img;
    const itemName = dom.createHeading(name, "h3");
    const itemDesc = dom.createPara(`${desc.substring(0, 100)}...`);
    const readMoreButton = dom.createButton("Read more");
    readMoreButton.classList.add("read_more_btn");

    card.append(itemImage, itemName, itemDesc, readMoreButton);
    return card;
}

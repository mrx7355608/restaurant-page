import DomHandler from "../domHandler";

export default function menu() {
    const dom = new DomHandler();
    const container = dom.createDiv();
    const heading = dom.createHeading("MENU", "h1");

    container.appendChild(heading);
    return heading;
}

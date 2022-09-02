import githubIcon from "../assets/images/icons/github.png";
import DomHandler from "../domHandler";

export default function footer() {
    const dom = new DomHandler();
    const container = dom.createFooter();
    const span = dom.createSpan("Developed by Fawad Imran");
    const a = dom.createLink(null);
    dom.addAttributes(a, {
        href: "https://github.com/mrx7355608",
        target: "_blank",
    });

    // Github Icon
    const icon = new Image();
    icon.src = githubIcon;

    a.appendChild(icon);
    container.appendChild(span);
    container.appendChild(a);

    return container;
}

import githubIcon from "../assets/images/github.png";

export default function footer() {
    const container = document.createElement("footer");
    const span = document.createElement("span");
    const a = document.createElement("a");

    // Text
    span.innerText = "Developed by Fawad Imran";

    // Github Icon
    const icon = new Image();
    icon.src = githubIcon;

    // Link
    a.href = "https://github.com/mrx7355608";
    a.target = "_blank";
    a.appendChild(icon);

    container.appendChild(span);
    container.appendChild(a);

    return container;
}

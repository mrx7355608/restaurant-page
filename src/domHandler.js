class DomHandler {
    createHeading(text, headingType) {
        const heading = document.createElement(headingType);
        heading.innerText = text;
        return heading;
    }
    createSpan(text) {
        const span = document.createElement("span");
        span.innerText = text;
        return span;
    }
    createPara(text) {
        const para = document.createElement("p");
        para.innerText = text;
        return para;
    }
    createButton(text) {
        const button = document.createElement("button");
        button.innerText = text;

        return button;
    }
    createLink(text) {
        const link = document.createElement("a");
        link.innerText = text;
        return link;
    }
    createDiv() {
        const div = document.createElement("div");
        return div;
    }
    createLinkItem(text) {
        const linkItem = document.createElement("li");
        linkItem.innerText = text;
        return linkItem;
    }
    renderPage(page) {
        const mainContainer = document.querySelector("#content");
        Array.from(mainContainer.children).forEach((node) => node.remove());
        mainContainer.appendChild(page());
    }
    addAttributes(elem, attrsObj) {
        if (attrsObj) {
            Object.keys(attrsObj).forEach((attribute) => {
                if (attribute === "class") {
                    const classes = attrsObj["class"].trim().split(" ");
                    elem.classList.add(...classes);
                } else {
                    const attributeValue = attrsObj[attribute];
                    elem.setAttribute(attribute, attributeValue);
                }
            });
        }
    }
    bindClickListener(elem, callback) {
        elem.addEventListener("click", callback);
    }
}
export default DomHandler;

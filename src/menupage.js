function menuPage() {
    // Changing title of the page
    document.title = "Restaurant . Menu";

    // Creating a h1 heading tag
    const heading = document.createElement("h1");
    heading.innerText = "Menu";

    return heading;
}
export default menuPage;

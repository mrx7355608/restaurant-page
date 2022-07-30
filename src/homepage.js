function homePage() {
    // Changing title of the page
    document.title = "Restaurant";

    // Creating a h1 heading tag
    const heading = document.createElement("h1");
    heading.innerText = "Home";

    return heading;
}
export default homePage;

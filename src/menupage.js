import "./assets/stylesheets/menupage.css";
import dish1 from "./assets/images/dish1.jpg";
import dish3 from "./assets/images/dish3.jpg";

const dummyData = [
    {
        image: dish1,
        name: "Dish 1",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$13",
    },
    {
        image: "",
        name: "Dish 2",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$18",
    },
    {
        image: dish3,
        name: "Dish 3",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$12",
    },
    {
        image: "",
        name: "Dish 4",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$20",
    },
    {
        image: "",
        name: "Dish 5",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$50",
    },
    {
        image: "",
        name: "Dish 6",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$25",
    },
    {
        image: "",
        name: "Dish 7",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$70",
    },
    {
        image: "",
        name: "Dish 8",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$37",
    },
    {
        image: "",
        name: "Dish 9",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$27",
    },
    {
        image: "",
        name: "Dish 10",
        desc: "Some random dish from a random country. Go buy yourself one and hadve fun lmao",
        price: "$44",
    },
];

// Creates menu items card
function itemsCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Dish image
    const dishImage = new Image();
    dishImage.src = item.image;
    dishImage.alt = "Dish";
    // Dish name
    const dishName = document.createElement("h3");
    dishName.innerText = item.name;
    // Dish description
    const dishDescription = document.createElement("p");
    dishDescription.innerText = item.desc;
    // Price
    const dishPrice = document.createElement("span");
    dishPrice.innerText = item.price;
    // Order button
    const orderButton = document.createElement("button");
    orderButton.innerText = "Order now";

    const itemInfo = document.createElement("div");
    itemInfo.classList.add("item-info");

    itemInfo.appendChild(dishName);
    itemInfo.appendChild(dishDescription);
    itemInfo.appendChild(dishPrice);
    itemInfo.appendChild(orderButton);
    card.appendChild(dishImage);
    card.appendChild(itemInfo);

    return card;
}
function menuPage() {
    // "Menu" heading
    const heading = document.createElement("h1");
    heading.innerText = "Menu";

    // Menu content container
    const contentContainer = document.createElement("div");
    contentContainer.setAttribute("id", "menu-container");
    const itemsContainer = document.createElement("div");
    itemsContainer.setAttribute("id", "items-container");

    dummyData.map((elem) => {
        const card = itemsCard(elem);
        itemsContainer.appendChild(card);
    });

    contentContainer.appendChild(heading);
    contentContainer.appendChild(itemsContainer);
    return contentContainer;
}
export default menuPage;

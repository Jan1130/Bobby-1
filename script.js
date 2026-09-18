// ==========================================
// FOOD CART BUILDER
// Logic Lead - Category & Search Filtering
// ==========================================


// ------------------------------------------
// Food Data
// ------------------------------------------

const foods = [

    {
        id: 1,
        name: "French Fries",
        category: "Snacks",
        price: 80,
        icon: "🍟"
    },

    {
        id: 2,
        name: "Burger",
        category: "Snacks",
        price: 120,
        icon: "🍔"
    },

    {
        id: 3,
        name: "Chicken Sandwich",
        category: "Snacks",
        price: 150,
        icon: "🥪"
    },

    {
        id: 4,
        name: "Samosa",
        category: "Snacks",
        price: 40,
        icon: "🥟"
    },

    {
        id: 5,
        name: "Lemon Juice",
        category: "Drinks",
        price: 60,
        icon: "🍋"
    },

    {
        id: 6,
        name: "Cold Coffee",
        category: "Drinks",
        price: 90,
        icon: "☕"
    },

    {
        id: 7,
        name: "Orange Juice",
        category: "Drinks",
        price: 70,
        icon: "🍊"
    },

    {
        id: 8,
        name: "Milkshake",
        category: "Drinks",
        price: 110,
        icon: "🥤"
    },

    {
        id: 9,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 100,
        icon: "🍰"
    },

    {
        id: 10,
        name: "Ice Cream",
        category: "Desserts",
        price: 70,
        icon: "🍦"
    },

    {
        id: 11,
        name: "Brownie",
        category: "Desserts",
        price: 90,
        icon: "🍫"
    },

    {
        id: 12,
        name: "Donut",
        category: "Desserts",
        price: 60,
        icon: "🍩"
    }

];


// ------------------------------------------
// Active Category
// ------------------------------------------

let activeCategory = "All";


// ------------------------------------------
// Get HTML Elements
// ------------------------------------------

const foodContainer =
    document.getElementById("foodContainer");

const searchInput =
    document.getElementById("searchInput");

const noResults =
    document.getElementById("noResults");

const categoryTitle =
    document.getElementById("categoryTitle");


// ------------------------------------------
// Set Active Category
// ------------------------------------------

function setCategory(category) {

    activeCategory = category;

    updateActiveButton();

    updateCategoryTitle();

    displayFoods();

}


// ------------------------------------------
// Update Active Button
// ------------------------------------------

function updateActiveButton() {

    const buttons =
        document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {

        if (button.dataset.category === activeCategory) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    });

}


// ------------------------------------------
// Update Category Heading
// ------------------------------------------

function updateCategoryTitle() {

    if (activeCategory === "All") {

        categoryTitle.textContent = "All Items";

    } else {

        categoryTitle.textContent =
            activeCategory;

    }

}


// ------------------------------------------
// Filter Food Items
// ------------------------------------------

function getFilteredFoods() {

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    return foods.filter(food => {

        // Category condition

        const categoryMatch =
            activeCategory === "All" ||
            food.category === activeCategory;


        // Search condition

        const searchMatch =
            food.name
                .toLowerCase()
                .includes(searchText);


        // Both conditions must be true

        return categoryMatch && searchMatch;

    });

}


// ------------------------------------------
// Display Food Items
// ------------------------------------------

function displayFoods() {

    const filteredFoods =
        getFilteredFoods();


    // Clear previous cards

    foodContainer.innerHTML = "";


    // Check if no items exist

    if (filteredFoods.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    // Create cards

    filteredFoods.forEach(food => {

        const card =
            document.createElement("div");

        card.className = "food-card";


        card.innerHTML = `

            <div class="food-icon">
                ${food.icon}
            </div>

            <h3>
                ${food.name}
            </h3>

            <p class="food-category">
                ${food.category}
            </p>

            <p class="food-price">
                ₹${food.price}
            </p>

        `;


        foodContainer.appendChild(card);

    });

}


// ------------------------------------------
// Search Event
// ------------------------------------------

searchInput.addEventListener(
    "input",
    function () {

        displayFoods();

    }
);


// ------------------------------------------
// Initial Display
// ------------------------------------------

displayFoods();

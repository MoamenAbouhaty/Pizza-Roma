/**
 * ============================================================
 * PIZZA ROMA - COMPLETE FRONTEND LOGIC
 * ============================================================
 * Includes:
 * - Full Menu
 * - Pizza
 * - Pasta
 * - Appetizers
 * - Salads
 * - Desserts
 * - Drinks
 * - Family Combos
 * - Online Images
 * - Category Filters
 * - Shopping Cart
 * - LocalStorage
 * - PDF Invoice
 * - Authentication
 * - Theme
 * - Mobile Navigation
 * - Node.js / Express / MongoDB Ready
 * ============================================================
 */


/* ============================================================
   RESTAURANT
============================================================ */

const RESTAURANT = {
    name: "Pizza Roma",
    address: "123 Pizza Street, Flavor Town, NY 10001",
    phone: "+1 (555) 839-2019",
    email: "order@pizzaroma.com"
};


/* ============================================================
   GLOBAL STATE
============================================================ */

let cart = JSON.parse(localStorage.getItem("pizzaCart")) || [];

let currentTheme =
    localStorage.getItem("pizzaTheme") || "light";


/* ============================================================
   COMPLETE MENU DATABASE
   Images are loaded from the internet.
============================================================ */

const menuDatabase = [

    /* ========================================================
       PIZZAS
    ======================================================== */

    {
        id: "pizza-margherita",
        name: "Classic Margherita",
        category: "classic",
        tag: "Classic",
        price: 12.99,
        image:
            "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=85",
        description:
            "San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil."
    },

    {
        id: "pizza-pepperoni",
        name: "Pepperoni Supreme",
        category: "spicy",
        tag: "Bestseller",
        price: 15.99,
        image:
            "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85",
        description:
            "Crispy pepperoni, mozzarella, spicy marinara sauce, and chili flakes."
    },

    {
        id: "pizza-four-cheese",
        name: "Quattro Formaggi",
        category: "specialty",
        tag: "Specialty",
        price: 16.50,
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
        description:
            "Mozzarella, gorgonzola, parmesan, and ricotta blended over a crispy Italian crust."
    },

    {
        id: "pizza-veggie",
        name: "Garden Veggie Delight",
        category: "veggie",
        tag: "Vegetarian",
        price: 14.25,
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
        description:
            "Bell peppers, red onions, olives, mushrooms, cherry tomatoes, and fresh pesto."
    },

    {
        id: "pizza-diavola",
        name: "Diavola",
        category: "spicy",
        tag: "Spicy",
        price: 15.75,
        image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        description:
            "Spicy Italian salami, mozzarella, tomato sauce, chili peppers, and oregano."
    },

    {
        id: "pizza-mushroom",
        name: "Truffle Mushroom",
        category: "specialty",
        tag: "Chef's Choice",
        price: 17.50,
        image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        description:
            "Roasted mushrooms, mozzarella, parmesan, fresh herbs, and truffle oil."
    },


    /* ========================================================
       PASTA
    ======================================================== */

    {
        id: "pasta-bolognese",
        name: "Spaghetti Bolognese",
        category: "pasta",
        tag: "Pasta",
        price: 14.99,
        image:
            "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=85",
        description:
            "Classic spaghetti served with rich Italian beef ragù and parmesan cheese."
    },

    {
        id: "pasta-alfredo",
        name: "Fettuccine Alfredo",
        category: "pasta",
        tag: "Pasta",
        price: 13.50,
        image:
            "https://images.unsplash.com/photo-1621996346565-e3d5d6281288?auto=format&fit=crop&w=800&q=85",
        description:
            "Creamy parmesan Alfredo sauce, roasted garlic, grilled chicken, and parsley."
    },

    {
        id: "pasta-arrabbiata",
        name: "Penne Arrabbiata",
        category: "pasta",
        tag: "Spicy",
        price: 12.99,
        image:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85",
        description:
            "Penne pasta tossed with spicy tomato sauce, garlic, chili, and Italian herbs."
    },

    {
        id: "pasta-lasagna",
        name: "Classic Lasagna",
        category: "pasta",
        tag: "Popular",
        price: 15.99,
        image:
            "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=85",
        description:
            "Layers of pasta, beef ragù, mozzarella, parmesan, and creamy béchamel sauce."
    },


    /* ========================================================
       APPETIZERS
    ======================================================== */

    {
        id: "app-garlic-bread",
        name: "Garlic Bread",
        category: "appetizers",
        tag: "Appetizer",
        price: 6.99,
        image:
            "https://images.unsplash.com/photo-1619531040571-f9416740661a?auto=format&fit=crop&w=800&q=85",
        description:
            "Freshly baked Italian bread with garlic butter, parmesan, and Italian herbs."
    },

    {
        id: "app-mozzarella",
        name: "Mozzarella Sticks",
        category: "appetizers",
        tag: "Appetizer",
        price: 8.99,
        image:
            "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=85",
        description:
            "Crispy golden mozzarella sticks served with warm tomato dipping sauce."
    },

    {
        id: "app-bruschetta",
        name: "Bruschetta",
        category: "appetizers",
        tag: "Italian",
        price: 7.99,
        image:
            "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=85",
        description:
            "Toasted Italian bread topped with fresh tomatoes, basil, garlic, and olive oil."
    },

    {
        id: "app-wings",
        name: "Chicken Wings",
        category: "appetizers",
        tag: "Popular",
        price: 10.99,
        image:
            "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=85",
        description:
            "Crispy chicken wings served with your choice of dipping sauce."
    },


    /* ========================================================
       SALADS
    ======================================================== */

    {
        id: "salad-caesar",
        name: "Classic Caesar Salad",
        category: "salads",
        tag: "Fresh",
        price: 9.99,
        image:
            "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=85",
        description:
            "Crisp romaine lettuce, parmesan, garlic croutons, and creamy Caesar dressing."
    },

    {
        id: "salad-greek",
        name: "Greek Salad",
        category: "salads",
        tag: "Fresh",
        price: 9.99,
        image:
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=85",
        description:
            "Fresh vegetables, feta cheese, olives, cucumber, tomatoes, and herbs."
    },

    {
        id: "salad-caprese",
        name: "Caprese Salad",
        category: "salads",
        tag: "Italian",
        price: 10.99,
        image:
            "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=85",
        description:
            "Fresh mozzarella, ripe tomatoes, basil, and extra virgin olive oil."
    },

    {
        id: "salad-garden",
        name: "Garden Salad",
        category: "salads",
        tag: "Vegetarian",
        price: 8.99,
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85",
        description:
            "Fresh seasonal vegetables served with a light Italian dressing."
    },


    /* ========================================================
       DESSERTS
    ======================================================== */

    {
        id: "dessert-tiramisu",
        name: "Italian Tiramisu",
        category: "desserts",
        tag: "Dessert",
        price: 7.99,
        image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85",
        description:
            "Traditional espresso-soaked ladyfingers layered with mascarpone cream and cocoa."
    },

    {
        id: "dessert-panna-cotta",
        name: "Panna Cotta",
        category: "desserts",
        tag: "Dessert",
        price: 6.99,
        image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85",
        description:
            "Silky Italian cream dessert served with a sweet berry topping."
    },

    {
        id: "dessert-chocolate",
        name: "Chocolate Cake",
        category: "desserts",
        tag: "Chocolate",
        price: 7.99,
        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
        description:
            "Rich chocolate cake covered with smooth chocolate frosting."
    },

    {
        id: "dessert-gelato",
        name: "Italian Gelato",
        category: "desserts",
        tag: "Italian",
        price: 5.99,
        image:
            "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=800&q=85",
        description:
            "Authentic Italian-style creamy gelato available in delicious flavors."
    },


    /* ========================================================
       DRINKS
    ======================================================== */

    {
        id: "drink-coke",
        name: "Coca-Cola",
        category: "drinks",
        tag: "Drink",
        price: 2.99,
        image:
            "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=800&q=85",
        description:
            "Chilled Coca-Cola soft drink served cold."
    },

    {
        id: "drink-pepsi",
        name: "Pepsi",
        category: "drinks",
        tag: "Drink",
        price: 2.99,
        image:
            "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=800&q=85",
        description:
            "Refreshing chilled Pepsi soft drink."
    },

    {
        id: "drink-orange",
        name: "Fresh Orange Juice",
        category: "drinks",
        tag: "Fresh",
        price: 4.99,
        image:
            "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=85",
        description:
            "Freshly squeezed orange juice made from ripe oranges."
    },

    {
        id: "drink-lemonade",
        name: "Fresh Lemonade",
        category: "drinks",
        tag: "Fresh",
        price: 3.99,
        image:
            "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=85",
        description:
            "Fresh lemon juice blended with mint and sparkling soda water."
    },

    {
        id: "drink-italian-soda",
        name: "Italian Soda",
        category: "drinks",
        tag: "Italian",
        price: 3.99,
        image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85",
        description:
            "Refreshing Italian-style sparkling soda served chilled."
    },


    /* ========================================================
       FAMILY COMBOS
    ======================================================== */

    {
        id: "family-feast",
        name: "Family Feast",
        category: "family",
        tag: "Family",
        price: 34.99,
        image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        description:
            "Two large pizzas, garlic bread, salad, and a large refreshing drink."
    },

    {
        id: "friends-combo",
        name: "Friends Combo",
        category: "family",
        tag: "Best Value",
        price: 29.99,
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
        description:
            "A generous combination of pizza, appetizers, and drinks perfect for sharing."
    },

    {
        id: "large-pizza-bundle",
        name: "Large Pizza Bundle",
        category: "family",
        tag: "Family",
        price: 39.99,
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
        description:
            "Three large pizzas with garlic bread and drinks for family gatherings."
    },

    {
        id: "party-combo",
        name: "Pizza Party Combo",
        category: "family",
        tag: "Party",
        price: 49.99,
        image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        description:
            "A complete party package with pizzas, appetizers, desserts, and drinks."
    }

];


/* ============================================================
   DEALS DATABASE
============================================================ */

const dealsDatabase = [

    {
        id: "deal-1",
        name: "Family Feast Combo",
        category: "family",
        tag: "Save 25%",
        price: 34.99,
        image:
            "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85",
        description:
            "2 Large Specialty Pizzas, Garlic Bread and a 2L Drink."
    },

    {
        id: "deal-2",
        name: "Pizza & Drinks Night",
        category: "family",
        tag: "Best Value",
        price: 28.99,
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
        description:
            "Large Classic Pizza with four refreshing drinks."
    },

    {
        id: "deal-3",
        name: "Solo Combo",
        category: "family",
        tag: "Lunch Special",
        price: 14.99,
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
        description:
            "Medium Margherita, soft drink, and garlic dip."
    },

    {
        id: "deal-4",
        name: "Little Chef Box",
        category: "family",
        tag: "Kids Menu",
        price: 9.99,
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
        description:
            "Small Margherita, juice box, and a fun sticker pack."
    }

];


/* ============================================================
   DOM ELEMENTS
============================================================ */

const themeToggleBtn =
    document.getElementById("themeToggleBtn");

const hamburgerBtn =
    document.getElementById("hamburgerBtn");

const navLinks =
    document.getElementById("navLinks");

const navOverlay =
    document.getElementById("navOverlay");

const pizzaGrid =
    document.getElementById("pizzaGrid");

const cartBtn =
    document.getElementById("cartBtn");

const closeCartBtn =
    document.getElementById("closeCartBtn");

const cartModal =
    document.getElementById("cartModal");

const cartBackdrop =
    document.getElementById("cartBackdrop");

const cartItemsContainer =
    document.getElementById("cartItemsContainer");

const cartBadge =
    document.getElementById("cartBadge");

const cartTotal =
    document.getElementById("cartTotal");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const downloadInvoiceBtn =
    document.getElementById("downloadInvoiceBtn");


/* ============================================================
   MENU FILTER BUTTONS
   We create ALL categories automatically.
============================================================ */

function createMenuFilters() {

    const filterContainer =
        document.querySelector(".filter-buttons");

    if (!filterContainer) return;

    filterContainer.innerHTML = `

        <button
            class="filter-btn active"
            data-filter="all"
            type="button">
            All Items
        </button>

        <button
            class="filter-btn"
            data-filter="classic"
            type="button">
            Classic
        </button>

        <button
            class="filter-btn"
            data-filter="specialty"
            type="button">
            Specialty
        </button>

        <button
            class="filter-btn"
            data-filter="veggie"
            type="button">
            Vegetarian
        </button>

        <button
            class="filter-btn"
            data-filter="spicy"
            type="button">
            Spicy
        </button>

        <button
            class="filter-btn"
            data-filter="pasta"
            type="button">
            Pasta
        </button>

        <button
            class="filter-btn"
            data-filter="appetizers"
            type="button">
            Appetizers
        </button>

        <button
            class="filter-btn"
            data-filter="salads"
            type="button">
            Salads
        </button>

        <button
            class="filter-btn"
            data-filter="desserts"
            type="button">
            Desserts
        </button>

        <button
            class="filter-btn"
            data-filter="drinks"
            type="button">
            Drinks
        </button>

        <button
            class="filter-btn"
            data-filter="family"
            type="button">
            Family Combos
        </button>
    `;
}


/* ============================================================
   RENDER MENU
============================================================ */

function renderMenu(items) {

    if (!pizzaGrid) return;

    pizzaGrid.innerHTML = "";

    if (!items || items.length === 0) {

        pizzaGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-utensils"></i>
                <h3>No items found</h3>
                <p>
                    No menu items are available in this category yet.
                </p>
            </div>
        `;

        return;
    }


    items.forEach(item => {

        const card =
            document.createElement("article");

        card.className = "pizza-card";

        card.dataset.category = item.category;


        card.innerHTML = `

            <div class="pizza-img-wrapper">

                <img
                    src="${item.image}"
                    alt="${escapeHTML(item.name)}"
                    loading="lazy"
                    onerror="
                        this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80';
                    "
                >

                <span class="pizza-tag">
                    ${escapeHTML(item.tag || item.category)}
                </span>

            </div>


            <div class="pizza-info">

                <h3 class="pizza-title">
                    ${escapeHTML(item.name)}
                </h3>

                <p class="pizza-desc">
                    ${escapeHTML(item.description)}
                </p>


                <div class="pizza-bottom">

                    <span class="pizza-price">
                        $${Number(item.price).toFixed(2)}
                    </span>


                    <button
                        type="button"
                        class="btn btn-primary btn-sm add-to-cart-btn"
                        data-id="${item.id}"
                    >

                        <i class="fa-solid fa-plus"></i>

                        Add

                    </button>

                </div>

            </div>
        `;


        pizzaGrid.appendChild(card);

    });


    /* Add to cart events */

    pizzaGrid
        .querySelectorAll(".add-to-cart-btn")
        .forEach(button => {

            button.addEventListener("click", event => {

                const id =
                    event.currentTarget.dataset.id;

                addToCart(id);

            });

        });

}


/* ============================================================
   FILTER MENU
============================================================ */

function filterMenu(category) {

    if (category === "all") {

        renderMenu(menuDatabase);

        return;
    }


    const filtered =
        menuDatabase.filter(item => {

            /*
             * Special behavior:
             * Spicy can include spicy pizzas.
             */

            if (category === "spicy") {

                return (
                    item.category === "spicy" ||
                    item.tag?.toLowerCase() === "spicy"
                );

            }


            return item.category === category;

        });


    renderMenu(filtered);
}


/* ============================================================
ADD TO CART
Cart stores ONLY:
id
name
price
quantity

NO IMAGE
NO DESCRIPTION
NO CATEGORY
NO TAG
============================================================ */

function addToCart(id) {

    const allProducts = [
        ...menuDatabase,
        ...dealsDatabase
    ];

    const item = allProducts.find(product =>
        String(product.id) === String(id)
    );

    if (!item) {

        console.error(
            "Product not found:",
            id
        );

        return;
    }

    const existing = cart.find(cartItem =>
        String(cartItem.id) === String(item.id)
    );

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: String(item.id),

            name: item.name,

            price: Number(item.price),

            quantity: 1

        });

    }

    saveAndUpdateCart();

    openCartModal();
}


/* ============================================================
   REMOVE FROM CART
============================================================ */

function removeFromCart(id) {

    cart =
        cart.filter(item =>
            String(item.id) !== String(id)
        );

    saveAndUpdateCart();
}


/* ============================================================
   UPDATE QUANTITY
============================================================ */

function updateQuantity(id, change) {

    const item =
        cart.find(cartItem =>
            String(cartItem.id) === String(id)
        );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(id);

    } else {

        saveAndUpdateCart();

    }
}


/* ============================================================
   SAVE CART
============================================================ */

function saveAndUpdateCart() {

    localStorage.setItem(
        "pizzaCart",
        JSON.stringify(cart)
    );

    updateCartUI();
}


/* ============================================================
UPDATE CART UI
Cart displays ONLY:
Product Name
Price
Quantity
Remove Button

NO PRODUCT IMAGE
============================================================ */

function updateCartUI() {

    if (!cartBadge || !cartItemsContainer) {
        return;
    }


    /* ========================================================
       TOTAL QUANTITY
    ======================================================== */

    const totalCount =
        cart.reduce(
            (sum, item) =>
                sum + Number(item.quantity || 0),
            0
        );


    cartBadge.textContent = totalCount;


    /* ========================================================
       CLEAR CART
    ======================================================== */

    cartItemsContainer.innerHTML = "";


    /* ========================================================
       EMPTY CART
    ======================================================== */

    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <p>
                    Your cart is currently empty.
                </p>

            </div>

        `;

    } else {


        /* ====================================================
           CART ITEMS
        ==================================================== */

        cart.forEach(item => {

            const div =
                document.createElement("div");


            div.className =
                "cart-item";


            const itemTotal =
                Number(item.price) *
                Number(item.quantity);


            div.innerHTML = `

                <div class="cart-item-details">

                    <h4>
                        ${escapeHTML(item.name)}
                    </h4>

                    <span class="cart-item-price">
                        $${itemTotal.toFixed(2)}
                    </span>

                </div>


                <div class="cart-item-actions">

                    <div class="quantity-controls">

                        <button
                            type="button"
                            class="btn-qty"
                            onclick="updateQuantity('${item.id}', -1)"
                            aria-label="Decrease quantity"
                        >

                            <i class="fa-solid fa-minus"></i>

                        </button>


                        <span class="qty-count">
                            ${Number(item.quantity)}
                        </span>


                        <button
                            type="button"
                            class="btn-qty"
                            onclick="updateQuantity('${item.id}', 1)"
                            aria-label="Increase quantity"
                        >

                            <i class="fa-solid fa-plus"></i>

                        </button>

                    </div>


                    <button
                        type="button"
                        class="btn-remove"
                        onclick="removeFromCart('${item.id}')"
                        aria-label="Remove item"
                    >

                        <i class="fa-solid fa-trash-can"></i>

                    </button>

                </div>

            `;


            cartItemsContainer.appendChild(div);

        });

    }


    /* ========================================================
       CART TOTAL
    ======================================================== */

    const totalPrice =
        cart.reduce(
            (sum, item) =>
                sum +
                (
                    Number(item.price || 0) *
                    Number(item.quantity || 0)
                ),
            0
        );


    if (cartTotal) {

        cartTotal.textContent =
            `$${totalPrice.toFixed(2)}`;

    }

}


/* ============================================================
   CART MODAL
============================================================ */

function openCartModal() {

    if (!cartModal || !cartBackdrop) return;

    cartModal.classList.add("open");

    cartBackdrop.classList.add("open");

}


function closeCartModal() {

    if (!cartModal || !cartBackdrop) return;

    cartModal.classList.remove("open");

    cartBackdrop.classList.remove("open");

}


/* ============================================================
   THEME
============================================================ */

function initTheme() {

    document.documentElement
        .setAttribute(
            "data-theme",
            currentTheme
        );


    updateThemeIcon();

}


function toggleTheme() {

    currentTheme =
        currentTheme === "light"
            ? "dark"
            : "light";


    document.documentElement
        .setAttribute(
            "data-theme",
            currentTheme
        );


    localStorage.setItem(
        "pizzaTheme",
        currentTheme
    );


    updateThemeIcon();

}


function updateThemeIcon() {

    if (!themeToggleBtn) return;

    const icon =
        themeToggleBtn.querySelector("i");


    if (!icon) return;


    icon.className =
        currentTheme === "dark"
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

}


/* ============================================================
   PDF INVOICE
============================================================ */

function generateInvoicePDF() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty! Add an item first."
        );

        return;
    }


    if (!window.jspdf) {

        alert(
            "PDF library is not available."
        );

        return;
    }


    const { jsPDF } = window.jspdf;


    const doc =
        new jsPDF({
            unit: "pt",
            format: "a4"
        });


    const pageWidth =
        doc.internal.pageSize.getWidth();


    const marginX = 48;

    let y = 60;


    const orderNumber =
        "PR-" +
        Date.now()
            .toString()
            .slice(-8);


    const orderDate =
        new Date().toLocaleString(
            "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(22);

    doc.setTextColor(
        255,
        71,
        87
    );


    doc.text(
        RESTAURANT.name,
        marginX,
        y
    );


    y += 18;


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(10);

    doc.setTextColor(
        90,
        90,
        90
    );


    doc.text(
        RESTAURANT.address,
        marginX,
        y
    );


    y += 14;


    doc.text(
        `Phone: ${RESTAURANT.phone} | Email: ${RESTAURANT.email}`,
        marginX,
        y
    );


    doc.setFont(
        "helvetica",
        "bold"
    );

    doc.setFontSize(16);

    doc.setTextColor(
        30,
        30,
        30
    );


    doc.text(
        "INVOICE",
        pageWidth - marginX,
        60,
        {
            align: "right"
        }
    );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(10);


    doc.text(
        `Order #: ${orderNumber}`,
        pageWidth - marginX,
        78,
        {
            align: "right"
        }
    );


    doc.text(
        `Date: ${orderDate}`,
        pageWidth - marginX,
        92,
        {
            align: "right"
        }
    );


    y += 30;


    doc.setDrawColor(
        230,
        230,
        230
    );


    doc.line(
        marginX,
        y,
        pageWidth - marginX,
        y
    );


    y += 26;


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(11);


    doc.text(
        "Item",
        marginX,
        y
    );


    doc.text(
        "Qty",
        pageWidth - marginX - 180,
        y,
        {
            align: "right"
        }
    );


    doc.text(
        "Unit Price",
        pageWidth - marginX - 90,
        y,
        {
            align: "right"
        }
    );


    doc.text(
        "Subtotal",
        pageWidth - marginX,
        y,
        {
            align: "right"
        }
    );


    y += 8;


    doc.line(
        marginX,
        y,
        pageWidth - marginX,
        y
    );


    doc.setFont(
        "helvetica",
        "normal"
    );


    let subtotal = 0;


    cart.forEach(item => {

        y += 26;


        if (y > 720) {

            doc.addPage();

            y = 60;

        }


        const lineTotal =
            Number(item.price) *
            Number(item.quantity);


        subtotal += lineTotal;


        doc.text(
            item.name,
            marginX,
            y
        );


        doc.text(
            String(item.quantity),
            pageWidth - marginX - 180,
            y,
            {
                align: "right"
            }
        );


        doc.text(
            `$${Number(item.price).toFixed(2)}`,
            pageWidth - marginX - 90,
            y,
            {
                align: "right"
            }
        );


        doc.text(
            `$${lineTotal.toFixed(2)}`,
            pageWidth - marginX,
            y,
            {
                align: "right"
            }
        );

    });


    y += 16;


    doc.line(
        marginX,
        y,
        pageWidth - marginX,
        y
    );


    const tax =
        subtotal * 0.08;


    const grandTotal =
        subtotal + tax;


    y += 26;


    doc.text(
        "Subtotal",
        pageWidth - marginX - 90,
        y,
        {
            align: "right"
        }
    );


    doc.text(
        `$${subtotal.toFixed(2)}`,
        pageWidth - marginX,
        y,
        {
            align: "right"
        }
    );


    y += 18;


    doc.text(
        "Estimated Tax (8%)",
        pageWidth - marginX - 90,
        y,
        {
            align: "right"
        }
    );


    doc.text(
        `$${tax.toFixed(2)}`,
        pageWidth - marginX,
        y,
        {
            align: "right"
        }
    );


    y += 22;


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(13);


    doc.setTextColor(
        255,
        71,
        87
    );


    doc.text(
        "Total Due",
        pageWidth - marginX - 90,
        y,
        {
            align: "right"
        }
    );


    doc.text(
        `$${grandTotal.toFixed(2)}`,
        pageWidth - marginX,
        y,
        {
            align: "right"
        }
    );


    y += 60;


    doc.setFont(
        "helvetica",
        "italic"
    );


    doc.setFontSize(10);


    doc.setTextColor(
        120,
        120,
        120
    );


    doc.text(
        "Thank you for choosing Pizza Roma. Buon appetito!",
        marginX,
        y
    );


    doc.save(
        "Pizza-Roma-Invoice.pdf"
    );

}


/* ============================================================
   AUTHENTICATION
============================================================ */

const API_BASE_URL = "/api";


const authActions =
    document.getElementById("authActions");


const loginBtn =
    document.getElementById("loginBtn");


const registerBtn =
    document.getElementById("registerBtn");


const loginModal =
    document.getElementById("loginModal");


const registerModal =
    document.getElementById("registerModal");


const authBackdrop =
    document.getElementById("authBackdrop");


const closeLoginBtn =
    document.getElementById("closeLoginBtn");


const closeRegisterBtn =
    document.getElementById("closeRegisterBtn");


const switchToRegister =
    document.getElementById("switchToRegister");


const switchToLogin =
    document.getElementById("switchToLogin");


const loginForm =
    document.getElementById("loginForm");


const registerForm =
    document.getElementById("registerForm");


const loginMessage =
    document.getElementById("loginMessage");


const registerMessage =
    document.getElementById("registerMessage");


/* ============================================================
   AUTH MODALS
============================================================ */

function openAuthModal(modal) {

    if (!modal || !authBackdrop) return;

    authBackdrop.classList.add("active");

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeAuthModals() {

    if (loginModal)
        loginModal.classList.remove("active");


    if (registerModal)
        registerModal.classList.remove("active");


    if (authBackdrop)
        authBackdrop.classList.remove("active");


    document.body.style.overflow = "";

}


function openLogin() {

    closeAuthModals();

    openAuthModal(loginModal);

}


function openRegister() {

    closeAuthModals();

    openAuthModal(registerModal);

}


/* ============================================================
   AUTH MESSAGE
============================================================ */

function showAuthMessage(
    element,
    message,
    type = "error"
) {

    if (!element) return;


    element.textContent =
        message;


    element.className =
        `auth-message show ${type}`;

}


function clearAuthMessage(element) {

    if (!element) return;


    element.textContent = "";

    element.className =
        "auth-message";

}


/* ============================================================
   UPDATE AUTH UI
============================================================ */

function updateAuthUI(user = null) {

    if (!authActions) return;


    if (user) {

        authActions.innerHTML = `

            <div class="logged-user">

                <span class="user-name">

                    <i class="fa-solid fa-user"></i>

                    Hi,
                    ${escapeHTML(user.name)}

                </span>


                <button
                    id="logoutBtn"
                    class="logout-btn"
                    type="button"
                >

                    <i class="fa-solid fa-right-from-bracket"></i>

                    Logout

                </button>

            </div>

        `;


        const logoutBtn =
            document.getElementById(
                "logoutBtn"
            );


        if (logoutBtn) {

            logoutBtn.addEventListener(
                "click",
                logout
            );

        }

    } else {

        authActions.innerHTML = `

            <button
                id="loginBtn"
                class="auth-btn login-btn"
                type="button"
            >

                <i class="fa-solid fa-right-to-bracket"></i>

                Login

            </button>


            <button
                id="registerBtn"
                class="auth-btn register-btn"
                type="button"
            >

                <i class="fa-solid fa-user-plus"></i>

                Register

            </button>

        `;


        document
            .getElementById("loginBtn")
            ?.addEventListener(
                "click",
                openLogin
            );


        document
            .getElementById("registerBtn")
            ?.addEventListener(
                "click",
                openRegister
            );

    }

}


/* ============================================================
   LOGOUT
============================================================ */

function logout() {

    localStorage.removeItem(
        "authToken"
    );

    localStorage.removeItem(
        "authUser"
    );


    updateAuthUI();


    alert(
        "You have been logged out successfully."
    );

}


/* ============================================================
   RESTORE AUTH
============================================================ */

function restoreAuthentication() {

    const token =
        localStorage.getItem(
            "authToken"
        );


    const storedUser =
        localStorage.getItem(
            "authUser"
        );


    if (!token || !storedUser) {

        updateAuthUI();

        return;

    }


    try {

        const user =
            JSON.parse(storedUser);


        updateAuthUI(user);

    } catch (error) {

        localStorage.removeItem(
            "authToken"
        );

        localStorage.removeItem(
            "authUser"
        );


        updateAuthUI();

    }

}


/* ============================================================
   ESCAPE HTML
============================================================ */

function escapeHTML(value) {

    const div =
        document.createElement("div");


    div.textContent =
        value ?? "";


    return div.innerHTML;

}


/* ============================================================
   AUTH EVENTS
============================================================ */

if (loginBtn) {

    loginBtn.addEventListener(
        "click",
        openLogin
    );

}


if (registerBtn) {

    registerBtn.addEventListener(
        "click",
        openRegister
    );

}


if (closeLoginBtn) {

    closeLoginBtn.addEventListener(
        "click",
        closeAuthModals
    );

}


if (closeRegisterBtn) {

    closeRegisterBtn.addEventListener(
        "click",
        closeAuthModals
    );

}


if (authBackdrop) {

    authBackdrop.addEventListener(
        "click",
        closeAuthModals
    );

}


if (switchToRegister) {

    switchToRegister.addEventListener(
        "click",
        openRegister
    );

}


if (switchToLogin) {

    switchToLogin.addEventListener(
        "click",
        openLogin
    );

}


/* ============================================================
   ESC KEY
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeAuthModals();

            closeCartModal();

        }

    }
);


/* ============================================================
   REGISTER
============================================================ */

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            clearAuthMessage(
                registerMessage
            );


            const name =
                document
                    .getElementById(
                        "registerName"
                    )
                    .value
                    .trim();


            const email =
                document
                    .getElementById(
                        "registerEmail"
                    )
                    .value
                    .trim();


            const password =
                document
                    .getElementById(
                        "registerPassword"
                    )
                    .value;


            const confirmPassword =
                document
                    .getElementById(
                        "registerConfirmPassword"
                    )
                    .value;


            if (
                password !==
                confirmPassword
            ) {

                showAuthMessage(
                    registerMessage,
                    "Passwords do not match."
                );

                return;

            }


            if (password.length < 8) {

                showAuthMessage(
                    registerMessage,
                    "Password must be at least 8 characters."
                );

                return;

            }


            try {

                const response =
                    await fetch(
                        `${API_BASE_URL}/auth/register`,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({
                                    name,
                                    email,
                                    password
                                })
                        }
                    );


                const data =
                    await response.json();


                if (!response.ok) {

                    showAuthMessage(
                        registerMessage,
                        data.error ||
                            "Registration failed."
                    );

                    return;

                }


                localStorage.setItem(
                    "authToken",
                    data.token
                );


                localStorage.setItem(
                    "authUser",
                    JSON.stringify(
                        data.user
                    )
                );


                updateAuthUI(
                    data.user
                );


                showAuthMessage(
                    registerMessage,
                    "Account created successfully!",
                    "success"
                );


                setTimeout(
                    () => {

                        closeAuthModals();

                        registerForm.reset();

                    },
                    700
                );

            } catch (error) {

                console.error(
                    "Registration error:",
                    error
                );


                showAuthMessage(
                    registerMessage,
                    "Unable to connect to the server."
                );

            }

        }
    );

}


/* ============================================================
   LOGIN
============================================================ */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            clearAuthMessage(
                loginMessage
            );


            const email =
                document
                    .getElementById(
                        "loginEmail"
                    )
                    .value
                    .trim();


            const password =
                document
                    .getElementById(
                        "loginPassword"
                    )
                    .value;


            try {

                const response =
                    await fetch(
                        `${API_BASE_URL}/auth/login`,
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify({
                                    email,
                                    password
                                })
                        }
                    );


                const data =
                    await response.json();


                if (!response.ok) {

                    showAuthMessage(
                        loginMessage,
                        data.error ||
                            "Login failed."
                    );

                    return;

                }


                localStorage.setItem(
                    "authToken",
                    data.token
                );


                localStorage.setItem(
                    "authUser",
                    JSON.stringify(
                        data.user
                    )
                );


                updateAuthUI(
                    data.user
                );


                showAuthMessage(
                    loginMessage,
                    "Login successful!",
                    "success"
                );


                setTimeout(
                    () => {

                        closeAuthModals();

                        loginForm.reset();

                    },
                    700
                );

            } catch (error) {

                console.error(
                    "Login error:",
                    error
                );


                showAuthMessage(
                    loginMessage,
                    "Unable to connect to the server."
                );

            }

        }
    );

}


/* ============================================================
   AUTH CONTENT LOCK
============================================================ */

function updateAuthLock() {

    const token =
        localStorage.getItem(
            "authToken"
        );


    if (token) {

        document.body.classList.remove(
            "auth-locked"
        );

    } else {

        document.body.classList.add(
            "auth-locked"
        );

    }

}


function createAuthLockUI() {

    if (
        document.getElementById(
            "authLockContainer"
        )
    ) {

        return;

    }


    const container =
        document.createElement("div");


    container.id =
        "authLockContainer";


    container.className =
        "auth-lock-container";


    container.innerHTML = `

        <div class="auth-lock-overlay"></div>


        <div class="auth-lock-message">

            <i class="fa-solid fa-lock"></i>

            <h2>
                Login Required
            </h2>

            <p>
                Please log in or create an account
                to view our menu and products.
            </p>

            <button
                type="button"
                id="openAuthFromLock"
                class="auth-lock-button"
            >

                <i class="fa-solid fa-right-to-bracket"></i>

                Login / Register

            </button>

        </div>

    `;


    document.body.appendChild(
        container
    );


    document
        .getElementById(
            "openAuthFromLock"
        )
        ?.addEventListener(
            "click",
            () => {

                document.body.classList.remove(
                    "auth-locked"
                );

                openLogin();

            }
        );

}


function initializeAuthLock() {

    createAuthLockUI();

    updateAuthLock();

}


/* ============================================================
   MOBILE NAVIGATION
============================================================ */

function initializeMobileNavigation() {

    if (!hamburgerBtn || !navLinks) {
        return;
    }


    const icon =
        hamburgerBtn.querySelector("i");


    function openMenu() {

        navLinks.classList.add(
            "open"
        );


        navOverlay?.classList.add(
            "open"
        );


        hamburgerBtn.setAttribute(
            "aria-expanded",
            "true"
        );


        if (icon) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        }

    }


    function closeMenu() {

        navLinks.classList.remove(
            "open"
        );


        navOverlay?.classList.remove(
            "open"
        );


        hamburgerBtn.setAttribute(
            "aria-expanded",
            "false"
        );


        if (icon) {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }


    hamburgerBtn.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            if (
                navLinks.classList.contains(
                    "open"
                )
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );


    navOverlay?.addEventListener(
        "click",
        closeMenu
    );


    navLinks
        .querySelectorAll("a.nav-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });


    document
        .querySelector(".logo")
        ?.addEventListener(
            "click",
            closeMenu
        );


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 768) {

                closeMenu();

            }

        }
    );

}


/* ============================================================
   EVENT LISTENERS
============================================================ */

function setupEventListeners() {

    /* Theme */

    themeToggleBtn?.addEventListener(
        "click",
        toggleTheme
    );


    /* Cart */

    cartBtn?.addEventListener(
        "click",
        openCartModal
    );


    closeCartBtn?.addEventListener(
        "click",
        closeCartModal
    );


    cartBackdrop?.addEventListener(
        "click",
        closeCartModal
    );


    /* Menu Filters */

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    document
                        .querySelectorAll(
                            ".filter-btn"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    event.currentTarget
                        .classList.add(
                            "active"
                        );


                    filterMenu(
                        event.currentTarget
                            .dataset
                            .filter
                    );

                }
            );

        });


    /* Deals */

    document
        .querySelectorAll(".add-deal-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    addToCart(
                        event.currentTarget
                            .dataset
                            .id
                    );

                }
            );

        });


    /* Invoice */

    downloadInvoiceBtn?.addEventListener(
        "click",
        generateInvoicePDF
    );


    /* Checkout */

    checkoutBtn?.addEventListener(
        "click",
        async () => {

            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;

            }


            const token =
                localStorage.getItem(
                    "authToken"
                );


            const storedUser =
                localStorage.getItem(
                    "authUser"
                );


            if (
                !token ||
                !storedUser
            ) {

                alert(
                    "Please login before placing your order."
                );

                openLogin();

                return;

            }


            let user;


            try {

                user =
                    JSON.parse(
                        storedUser
                    );

            } catch {

                localStorage.removeItem(
                    "authToken"
                );

                localStorage.removeItem(
                    "authUser"
                );


                alert(
                    "Your session is invalid. Please login again."
                );


                openLogin();

                return;

            }


            const totalAmount =
                cart.reduce(
                    (sum, item) =>
                        sum +
                        Number(item.price) *
                        Number(item.quantity),
                    0
                );


            const orderData = {

                customerName:
                    user.name,

                customerEmail:
                    user.email,

                items:
                    cart.map(item => ({

                        id: item.id,

                        name: item.name,

                        price:
                            Number(item.price),

                        quantity:
                            Number(item.quantity)

                    })),

                totalAmount:
                    Number(
                        totalAmount.toFixed(2)
                    )

            };


            checkoutBtn.disabled =
                true;


            checkoutBtn.innerHTML = `

                <i class="fa-solid fa-spinner fa-spin"></i>

                Processing...

            `;


            try {

                const response =
                    await fetch(
                        "/api/orders",
                        {

                            method: "POST",

                            headers: {

                                "Content-Type":
                                    "application/json",

                                "Authorization":
                                    `Bearer ${token}`

                            },

                            body:
                                JSON.stringify(
                                    orderData
                                )

                        }
                    );


                const result =
                    await response.json();


                if (
                    !response.ok ||
                    !result.success
                ) {

                    alert(
                        "Failed to place order: " +
                        (
                            result.error ||
                            "Server error."
                        )
                    );

                    return;

                }


                alert(
                    `Order placed successfully!\nOrder #: ${result.data.orderNumber}`
                );


                cart = [];


                saveAndUpdateCart();


                closeCartModal();

            } catch (error) {

                console.error(
                    "Checkout error:",
                    error
                );


                alert(
                    "Cannot connect to the server. Please make sure the backend is running."
                );

            } finally {

                checkoutBtn.disabled =
                    false;


                checkoutBtn.innerHTML = `

                    <i class="fa-solid fa-credit-card"></i>

                    Proceed to Checkout

                `;

            }

        }
    );


    /* Inquiry Form */

    const orderForm =
        document.getElementById(
            "orderForm"
        );


    orderForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            alert(
                "Thanks for reaching out! We will get back to you shortly."
            );


            orderForm.reset();

        }
    );


    /* Close Cart when navigating */

    document
        .querySelectorAll(
            ".nav-link, .logo, .footer-links a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                closeCartModal
            );

        });

}


/* ============================================================
   INITIALIZE APPLICATION
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initTheme();

        createMenuFilters();

        renderMenu(menuDatabase);

        updateCartUI();

        restoreAuthentication();

        initializeAuthLock();

        initializeMobileNavigation();

        setupEventListeners();

    }
);


/* ============================================================
   AUTH STATE CHANGES
============================================================ */

window.addEventListener(
    "storage",
    () => {

        updateAuthLock();

    }
);


/* ============================================================
   MAKE CART FUNCTIONS AVAILABLE
   For inline onclick inside cart.
============================================================ */

window.updateQuantity =
    updateQuantity;


window.removeFromCart =
    removeFromCart;


window.addToCart =
    addToCart;
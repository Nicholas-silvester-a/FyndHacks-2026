
const products = {
    mouse: {
        name: "Wireless Mouse",
        price: 500
    },
    keyboard: {
        name: "Keyboard",
        price: 1000
    }
};

let cart = {};
let orderPlaced = false;

const cartItems = document.getElementById("cart-items");
const orderTotal = document.getElementById("order-total");
const customerName = document.getElementById("customer-name");
const errorMessage = document.getElementById("error-message");
const placeOrderButton = document.getElementById("place-order");
const confirmation = document.getElementById("confirmation");

function formatPrice(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

function addProduct(id) {
    if (orderPlaced) return;

    cart[id] = (cart[id] || 0) + 1;
    updateCart();
}

function changeQuantity(id, change) {
    if (orderPlaced) return;

    cart[id] += change;

    if (cart[id] <= 0) {
        delete cart[id];
    }

    updateCart();
}

function removeProduct(id) {
    if (orderPlaced) return;

    delete cart[id];
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";

    let total = 0;

    const ids = Object.keys(cart);

    if (ids.length === 0) {
        cartItems.textContent = "Your cart is empty.";
    }

    ids.forEach(id => {
        const product = products[id];
        const quantity = cart[id];
        const lineTotal = product.price * quantity;

        total += lineTotal;

        const item = document.createElement("div");
        item.className = "cart-item";

        const details = document.createElement("div");

        const heading = document.createElement("h3");
        heading.textContent = product.name;

        const price = document.createElement("p");
        price.textContent =
            `₹${product.price} × ${quantity} = ${formatPrice(lineTotal)}`;

        details.append(heading, price);

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const minus = document.createElement("button");
        minus.textContent = "-";
        minus.setAttribute("data-testid", `decrease-${id}`);
        minus.disabled = orderPlaced;
        minus.onclick = () => changeQuantity(id, -1);

        const count = document.createElement("span");
        count.textContent = quantity;
        count.setAttribute("data-testid", `quantity-${id}`);

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.setAttribute("data-testid", `increase-${id}`);
        plus.disabled = orderPlaced;
        plus.onclick = () => changeQuantity(id, 1);

        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.className = "remove-button";
        remove.setAttribute("data-testid", `remove-${id}`);
        remove.disabled = orderPlaced;
        remove.onclick = () => removeProduct(id);

        controls.append(minus, count, plus, remove);
        item.append(details, controls);

        cartItems.appendChild(item);
    });

    orderTotal.textContent = formatPrice(total);
}

document.getElementById("add-mouse").onclick =
    () => addProduct("mouse");

document.getElementById("add-keyboard").onclick =
    () => addProduct("keyboard");

placeOrderButton.onclick = function () {

    // Prevent duplicate orders
    if (orderPlaced) return;

    // Validate empty cart
    if (Object.keys(cart).length === 0) {
        errorMessage.textContent =
            "Your cart is empty. Please add a product.";
        return;
    }

    // Validate customer name
    if (!customerName.value.trim()) {
        errorMessage.textContent =
            "Please enter your name.";
        customerName.focus();
        return;
    }

    // Lock order submission before showing confirmation
    orderPlaced = true;
    placeOrderButton.disabled = true;

    const reference =
        "ORD-" + Date.now().toString();

    errorMessage.textContent = "";

    confirmation.hidden = false;
    confirmation.textContent =
        `Thank you, ${customerName.value.trim()}! ` +
        `Your order is confirmed. Reference: ${reference}`;
    customerName.value = "";

    updateCart();
};

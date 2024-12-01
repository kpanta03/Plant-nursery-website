
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-subtotal");
const cartShipping = document.getElementById("shipping");
const cartTotal = document.getElementById("total");

const cart = JSON.parse(localStorage.getItem("cart")) || [];
let subtotal = 0;
let shipping = 10;



function renderCart() {
cartItemsContainer.innerHTML = ""; // Clear the cart items container
subtotal = 0; // Reset subtotal

if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
        <tr>
            <td colspan="5" class="text-center">Your cart is empty.</td>
        </tr>
    `}


cart.forEach((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    subtotal += itemSubtotal;

    const cartItem = document.createElement("tr");
    cartItem.classList.add("cart-product");

    cartItem.innerHTML = `
        <td>
          <img src="${item.image}" alt="${item.name}" class="product-img"> ${item.name}
        </td>
        <td>Rs ${item.price}</td>
        <td>
          <button class="quantity-btn minus" onclick="updateQuantity(${index}, -1)">-</button>
          <input type="number" value="${item.quantity}" class="quantity-input" onchange="changeQuantity(${index}, this.value)">
          <button class="quantity-btn plus" onclick="updateQuantity(${index}, 1)">+</button>
        </td>
        <td>Rs ${(itemSubtotal).toFixed(2)}</td>
        <td>
          <button class="remove-btn" onclick="removeItem(${index})"><i class="bi bi-trash"></i></button>
        </td>
    `;

    cartItemsContainer.appendChild(cartItem);
});

const total = subtotal + shipping;

cartShipping.innerHTML = `Rs ${shipping}`;
cartTotalElement.innerHTML = `Rs ${subtotal.toFixed(2)}`;
cartTotal.innerHTML = `Rs ${total.toFixed(2)}`;
}
function updateQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change; // Update quantity
        localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
        renderCart(); // Re-render the cart
    } else {
        alert("Quantity cannot be less than 1.");
    }
}


// Function to handle quantity change via input
function changeQuantity(index, value) {
    const newQuantity = parseInt(value);

    if (!isNaN(newQuantity) && newQuantity > 0) {
        cart[index].quantity = newQuantity; // Update quantity
        localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
        renderCart(); // Re-render the cart
    } else {
        alert("Quantity must be a positive number.");
    }
}




function removeItem(index) {
    cart.splice(index, 1); // Remove item from cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    renderCart(); // Re-render the cart
    // window.location.reload();
}


renderCart();


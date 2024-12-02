function updateCartNumber() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity,0);

    console.log("Cart contents:", cart); // Debugging cart data
    console.log("Total items:", totalItems); // Debugging total items count

    const cartIconNumber = document.querySelector('.cart-number');
    // if (cartIconNumber) {
        cartIconNumber.innerText = totalItems; // Update cart number
        console.log("Cart number updated in the DOM.");
    // } else {
    //     console.log("Cart icon element not found.");
    // }
}


// Call this on page load
updateCartNumber();
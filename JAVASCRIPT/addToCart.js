
function addToCart(productId)
{
    
 const product = items.find(item => item.id === productId);

 // Get current cart from localStorage
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 console.log(cart);

 // Check if the product is already in the cart
 const existingProduct = cart.find(item => item.id === productId);
 if (existingProduct) {
   existingProduct.quantity += 1;
 } else {
   cart.push({ ...product, quantity: 1 });
 }

 // Save updated cart to localStorage
 localStorage.setItem("cart", JSON.stringify(cart));

 updateCartNumber();
 alert('item is added');
}



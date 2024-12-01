




function displayProducts(items) {
  productContainer.innerHTML = ""; // Clear previous products
  const limitedItems = items.slice(0, 8);

  limitedItems.forEach(item => {
    const discountedPrice = item.discount > 0
      ? (item.price - (item.price * (item.discount / 100))).toFixed(2)
      : item.price.toFixed(2);

    const priceContent = item.discount > 0
      ? `<p class="card-text" style="margin: 0.25rem 0;">
        <del> Rs ${item.price}</del> - ${item.discount}%
      </p>`
      : '';

    productContainer.innerHTML += `
     <div class="col-6 col-md-4 col-lg-3 product-item">
       <div class="card">
         <img src="${item.image}" class="card-img-top plants" alt="${item.name}">
         <div class="card-body text-center" style="padding: 0.5rem;">
           <h5 class="card-title" style="margin: 0.5rem 0;">${item.name}</h5>
           <h6 class="card-subtitle mb-2 text-body-secondary" style="margin: 0.25rem 0;">Rs ${discountedPrice}</h6>
           ${priceContent}
           <div class="btn-container" style="display: flex; gap: 5px; justify-content: center; margin-top: 0.5rem;">
             <button class="btn btn-success btn-sm products-btn buy-now" onclick="redirectToDetail(${item.id})">Buy Now</button>
             <button class="btn btn-outline-success btn-sm products-btn" onclick="addToCart(${item.id})">Add to Cart</button>
           </div>
         </div>
       </div>
     </div>`;
  });
}


// Event listeners for filtering buttons
allBtn.addEventListener("click", () => {
  displayProducts(items); // Display all items
});

saleBtn.addEventListener("click", () => {
  const filteredItems = items.filter(item => item.discount > 0);
  displayProducts(filteredItems); // Display items with discounts
});

newArrivalBtn.addEventListener("click", () => {
  const filteredItems = items.filter(item => item.category.includes("New Arrival"));
  displayProducts(filteredItems); // Display new arrivals
});

bestSellerBtn.addEventListener("click", () => {
  const filteredItems = items.filter(item => parseFloat(item.rating) >= 4.5);
  displayProducts(filteredItems); // Display best sellers based on rating
});

indoorBtn.addEventListener("click", () => {
  const filteredItems = items.filter(item => item.category.includes("Indoor Plant"));
  displayProducts(filteredItems); // Display indoor plants
});

outdoorBtn.addEventListener("click", () => {
  const filteredItems = items.filter(item => item.category.includes("Outdoor Plant"));
  displayProducts(filteredItems); // Display outdoor plants
});

// Initial display (all products)
displayProducts(items);




// function addToCart(productId) {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const product = items.find(p => p.id === productId);
//   cart.push(product);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   document.getElementsByClassName("cart-number").innerText = cart.length;
  
  
// }


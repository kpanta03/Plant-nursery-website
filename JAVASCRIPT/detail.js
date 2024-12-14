


// Buy now button's code
function redirectToDetail(itemId) {
    // Redirect to item detail page with query parameter
    window.location.href = `Itemdetail.html?id=${itemId}`;
  }

   // Function to get query parameters
   function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  // Get item ID from query parameters
  const itemId = parseInt(getQueryParams());

  // Find the item based on the ID
  const item = items.find((item) => item.id === itemId);

  // Display item details dynamically
  const sdetail=document.querySelector(".sproduct-row");
  

  if (item) {
    sdetail.innerHTML=`
     <div class=" col-12 col-lg-6 d-flex justify-content-center mb-lg-auto " id="spimage">
       <img src="${item.image}" alt="${item.name}" class="img-fluid b-photo">
      </div>

      <div class=" col-10 col-lg-6 sproduct-details mt-5 mt-lg-4 mx-5 mx-lg-0">
        <h3 id="spcategory">
        ${item.category.join(",")}
        </h3>
        <h2 id="spname">
        ${item.name}
        </h2>
        <P id="spprice">Rs 
        ${item.price}
        </P>
        <p id="sprating">
        ${getStars(item.rating)} 
        </p>
        <div class="my-3">
          <label for="quantity" class="form-label">Quantity:</label>
          <input type="number" id="quantity" class="form-control w-50" value="1" min="1">
        </div>

        <button class="btn btn-success w-50" onclick="addToCart(${item.id})">Add to Cart</button>
        <hr>
        <h5>Plant Details</h5>
        <p class="paragraph" id="spdetail">
        ${item.detail}
        </p>
      </div>
    `





  } 
  

function getStars(rating) {
let stars = "";
for (let i = 0; i < Math.floor(rating); i++) {
  stars += '<i class="bi bi-star-fill" style="padding: 0.5rem; color:brown;"></i>';
}
if (rating % 1 !== 0) {
  stars += '<i class="bi bi-star-half" style="padding: 0.5rem; color:brown;"></i>';
}
return stars;
}

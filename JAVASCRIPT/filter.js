

   
   


    const itemsPerPage = 8;  // Number of items to display per page
    let currentPage = 1;     // The current page number
    let filteredItems = [...items];

    function displayPagination(data = filteredItems) {
      const totalItems = data.length;
      const pageCount = Math.ceil(totalItems / itemsPerPage);
      const pagination = document.getElementById("pagination");

      pagination.innerHTML = ""; // Clear existing pagination

      for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement("li");
        pageItem.classList.add("page-item");
        if (i === currentPage) {
          pageItem.classList.add("active"); // Highlight active page
        }

        const pageLink = document.createElement("a");
        pageLink.classList.add("page-link");
        pageLink.href = "#";
        pageLink.textContent = i;

        pageLink.addEventListener("click", function (event) {
          event.preventDefault();
          currentPage = i;
          displayProducts(currentPage, data); // Update products for the new page
          displayPagination(data); // Refresh pagination
        });

        pageItem.appendChild(pageLink);
        pagination.appendChild(pageItem);
      }
    }


    function displayProducts(page = 1, data = filteredItems) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageItems = data.slice(startIndex, endIndex);

      const productContainer = document.querySelector(".products-row");
      productContainer.innerHTML = ""; // Clear previous products

      pageItems.forEach(item => {
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
              <button class="btn btn-outline-success btn-sm products-btn add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>`;
      });
    }


    function initializePage() {
      // Automatically display Page 1 items on load
      displayProducts(currentPage);

      // Create pagination
      displayPagination();
    }

    // Run the initialization function on page load
    initializePage();

    



    // displayProducts(items);
    allBtn.addEventListener("click", () => {
      filteredItems = [...items]; // Reset to all items
      currentPage = 1; // Reset to page 1
      displayProducts(currentPage, filteredItems);
      displayPagination(filteredItems);
    })


    saleBtn.addEventListener("click", () => {
      filteredItems = items.filter(item => item.discount > 0);
      currentPage = 1; // Reset to page 1
      displayProducts(currentPage, filteredItems);
      displayPagination(filteredItems);
    });

    newArrivalBtn.addEventListener("click", () => {
      filteredItems = items.filter(item => item.category.includes("New Arrival"));
      currentPage = 1; // Reset to page 1
      displayProducts(currentPage, filteredItems);
      displayPagination(filteredItems);
    });


    bestSellerBtn.addEventListener("click", () => {
      filteredItems = items.filter((item) => parseFloat(item.rating) >= 4.5);
      currentPage = 1; // Reset to page 1
      displayProducts(currentPage, filteredItems);
      displayPagination(filteredItems);
    });

    indoorBtn.addEventListener("click", () => {
      filteredItems = items.filter(item => item.category.includes("Indoor Plant"));
      currentPage = 1; // Reset to page 1
      displayProducts(currentPage, filteredItems);
      displayPagination(filteredItems);
    });


    outdoorBtn.addEventListener("click", () => {
      filteredItems = items.filter(item => item.category.includes("Outdoor Plant"));
      currentPage = 1; // Reset to page 1
      displayProducts(currentPage, filteredItems);
      displayPagination(filteredItems);
    });



    

    




// js to show search input
function toggleSearch() {
    const searchBox = document.getElementById("searchBox");
    searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
  }
  
  
  // search garni function
  function searchProducts(event) {
    event.preventDefault(); // Prevent form submission if triggered by a button
    let input, filter, productItems, title, i, txtValue;
  
    // Get the input element, depending on the event target
    if (event.target.tagName === "BUTTON") {
      // If the event is triggered by a button, find the related input
      input = event.target
        .closest("form")
        .querySelector(".searchInput");
    } else if (event.target.tagName === "INPUT") {
      // If triggered by the input itself
      input = event.target;
    }
  
    if (!input) {
      console.error("Input element not found!");
      return;
    }
  
    // Perform the filtering
    filter = input.value.toUpperCase();
    productItems = document.getElementsByClassName("product-item");
  
    for (i = 0; i < productItems.length; i++) {
      title = productItems[i].getElementsByClassName("card-title")[0];
      txtValue = title.textContent || title.innerText;
  
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        productItems[i].style.display = "";
      } else {
        productItems[i].style.display = "none";
      }
    }
  }
  
  
  
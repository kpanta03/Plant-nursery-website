
  // JavaScript for automatic scrolling
  // const scrollContainer = document.querySelector('.scroll-container');
    let scrollAmount = 0;

    function autoScroll() {
      scrollAmount += 1; // Adjust speed by changing the increment value
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0; // Reset to start
      }

      requestAnimationFrame(autoScroll);
    }

    autoScroll();

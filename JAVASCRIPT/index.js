
// for icons
feather.replace();

const items = [
    {
      id: 1,
      image: "images/peacelily.png",
      category: ["Indoor Plant"],
      name: "PEACE LILY",
      price: 200,
      rating: "4",
      discount: 10, //10% discount
      detail: "The Peace Lily (Spathiphyllum) is a stunning and easy-to-care-for indoor plant that adds a touch of elegance to any space. Its lush green foliage and iconic white blooms make it a favorite choice for home decor and office environments. Known for its air-purifying qualities, it helps remove toxins from the air, promoting a healthier and more serene atmosphere. The Peace Lily symbolizes peace, prosperity, and tranquility, making it an excellent gift for loved ones or a meaningful addition to your personal sanctuary."
    },
  
    {
      id: 2,
      image: "https://khushinepal.com/wp-content/uploads/2023/03/000.jpg",
      category: ["Indoor Plant", "New Arrival"],
      name: "SNAKE PLANT",
      price: 300,
      rating: "4.5",
      detail: "The Snake Plant, also known as Mother-in-Law's Tongue, is one of the most resilient and popular indoor plants. Its striking upright, sword-like leaves make it a stunning addition to any room. This plant is known for its ability to purify the air by filtering toxins and producing oxygen, even at night. Perfect for bedrooms and offices, it thrives with minimal care and adds a modern, sculptural touch to your decor."
    },
    {
      id: 3,
      image: "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1605436865/vendor/7151/catalog/product/2/0/20200304010842_file_5e5eff9a260b1_5e5f00dbe1714_5ed52d4ba2836_5ed52d4e2e208.jpg",
      category: ["Indoor Plant"],
      name: "POTHOS",
      price: 250,
      rating: "4.7",
      detail: "Pothos, often referred to as the 'Devil's Ivy,' is a versatile and low-maintenance plant loved for its trailing vines and heart-shaped leaves. Available in a variety of colors and patterns, Pothos is perfect for both beginners and experienced plant enthusiasts. It is a natural air purifier and can thrive in a wide range of light conditions, making it ideal for hanging baskets, shelves, or table displays."
    },
    {
      id: 4,
      image: "https://gardeningsoul.com/wp-content/uploads/2017/10/rosemary-_8__1.jpg",
      category: ["Herb"],
      name: "ROSEMARY",
      price: 150,
      rating: "4.6",
      discount: 5,
      detail: "Rosemary is a fragrant herb cherished for its culinary, medicinal, and ornamental uses. Known for its needle-like leaves and woody aroma, it enhances the flavor of dishes like roasted vegetables and meats. This evergreen herb also serves as a natural air freshener and is believed to improve memory and concentration. Easy to grow, Rosemary thrives in well-drained soil and sunny spots, making it perfect for kitchen gardens or patios."
    },
    {
      id: 5,
      image: "https://www.gardening4joy.com/wp-content/uploads/2022/02/supermarket-basil.jpg",
      category: ["Herb"],
      name: "BASIL",
      price: 120,
      rating: "4.8",
      detail: "Basil is a versatile and aromatic herb celebrated for its rich, spicy flavor and health benefits. Commonly used in cuisines worldwide, it is a key ingredient in pesto and pairs beautifully with tomatoes, pasta, and salads. Known for its medicinal properties, Basil is believed to aid digestion and boost immunity. It thrives in warm, sunny conditions and is a must-have for any kitchen garden."
    },
    {
      id: 6,
      image: "https://www.gowthaminursery.in/wp-content/uploads/2020/12/Ficus-Panda-2.jpg?v=1608991055",
      category: ["Indoor Plant"],
      name: "FICUS",
      price: 400,
      rating: "4.4",
      detail: "The Ficus plant, also known as the Weeping Fig, is a classic indoor plant admired for its graceful, arching branches and glossy green leaves. It is perfect for adding a touch of nature to living spaces, offices, or lobbies. Ficus is a low-maintenance plant that helps improve air quality and creates a calming ambiance. With proper care, it grows into a beautiful and long-lasting addition to your plant collection."
    },
    {
      id: 7,
      image: "https://balconygardenweb.b-cdn.net/wp-content/uploads/2022/01/6.Melissa-officinalis2.jpg",
      category: ["Herb"],
      name: "MINT",
      price: 100,
      rating: "4.9",
      detail: "Mint is a refreshing and fast-growing herb known for its cool, invigorating aroma and taste. A staple in kitchens, it is used to enhance the flavor of beverages, desserts, and savory dishes. Mint also offers medicinal benefits, such as aiding digestion and relieving headaches. It is easy to grow, thrives in both pots and gardens, and makes a fragrant addition to any space."
    },
    {
      id: 8,
      image: "https://i0.wp.com/greencoreplants.com/wp-content/uploads/2023/01/Jasminum-Sambac.webp?fit=500%2C500&ssl=1",
      category: ["Outdoor Plant"],
      name: "JASMINE",
      price: 350,
      rating: "4.7",
      discount: 10,
      detail: "Jasmine is a beautiful and fragrant flowering plant renowned for its delicate white blooms and sweet aroma. It is often grown as a climbing plant or in pots to add elegance to gardens, balconies, or patios. Known for its calming properties, Jasmine is often used in aromatherapy and perfumes. It thrives in warm, sunny conditions and creates a romantic and serene atmosphere wherever it grows."
    },
  
  
    {
      id: 9,
      image: "https://balconygardenweb.b-cdn.net/wp-content/uploads/2022/01/6.Melissa-officinalis2.jpg",
      category: ["Herb"],
      name: "MINT",
      price: 100,
      rating: "4.9",
      detail: "Mint is a refreshing and fast-growing herb known for its cool, invigorating aroma and taste. A staple in kitchens, it is used to enhance the flavor of beverages, desserts, and savory dishes. Mint also offers medicinal benefits, such as aiding digestion and relieving headaches. It is easy to grow, thrives in both pots and gardens, and makes a fragrant addition to any space."
    },
  
    {
      id: 10,
      image: "https://i0.wp.com/greencoreplants.com/wp-content/uploads/2023/01/Jasminum-Sambac.webp?fit=500%2C500&ssl=1",
      category: ["Outdoor Plant"],
      name: "JASMINE",
      price: 350,
      rating: "4.7",
      discount: 10,
      detail: "Jasmine is a beautiful and fragrant flowering plant renowned for its delicate white blooms and sweet aroma. It is often grown as a climbing plant or in pots to add elegance to gardens, balconies, or patios. Known for its calming properties, Jasmine is often used in aromatherapy and perfumes. It thrives in warm, sunny conditions and creates a romantic and serene atmosphere wherever it grows."
    }
  
  
  ];





  // const image= document.getElementById("spimage");
  // const category= document.getElementById("spcategory");
  // const pname= document.getElementById("spname");
  // const price= document.getElementById("spprice");
  // const rating= document.getElementById("sprating");
  // const detail= document.getElementById("spdetail");


  let allBtn = document.querySelector(".all-btn");
  let saleBtn = document.querySelector(".sale-btn");
  let newArrivalBtn = document.querySelector(".new-arrival-btn");
  let bestSellerBtn = document.querySelector(".best-seller-btn");
  let indoorBtn = document.querySelector(".indoor-btn");
  let outdoorBtn = document.querySelector(".outdoor-btn");
  let flowerBtn = document.querySelector(".flower-btn");
  let productContainer = document.querySelector('.products-row');

  const cartIconNumber = document.getElementsByClassName('cart-number');


  const scrollContainer = document.querySelector('.scroll-container');


  document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const page2 = document.querySelector(".page2");

    if (page2) {
        const page2Top = page2.offsetTop;

        if (window.scrollY >= page2Top) {
            navbar.classList.add("navbar-white");
        } else {
            navbar.classList.remove("navbar-white");
        }
    }
});




    


   
    
   















  


    







    


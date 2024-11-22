//Group Member:Karlicia Sutherland 2302691
//Zachery Myrie 2210180
//D-Andrea Graham, 2304203

// Initialize cart as an empty array from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

//Questin2(i)Create an array of product objects in JavaScript. Each product should have:
//`name``price``description``image`
// product objects in an array
const products = [
    {
      name: "Silk Bonnet",
      price: 25,
      description: "A luxurious silk bonnet for your hair.",
      image: "silk bonnet.jpg"
    },
    {
      name: "Satin Bonnet",
      price: 30,
      description: "A comfortable satin bonnet for all hair types.",
      image: "satin bonnet.jpg"
    },
    {
      name: "Elastic Bonnet",
      price: 20,
      description: "Elastic bonnets for a snug fit.",
      image: "elastic bonnet.jpg"
    },
    {
      name: "Night Caps",
      price: 25,
      description: "Soft and cozy night caps to protect your hair while you sleep.",
      image: "night caps.jpg"
    },
    {
      name: "Pink Tie Bonnet",
      price: 25,
      description: "A luxurious pink tie bonnet for your hair.",
      image: "BONNET QUEEN Silk Bonnet for Sleeping Satin Bonnet Hair Cap Bonnet Pink Bonnets Sleep Bonnet for Women Girls Night Bonnets for Natural Curly Hair.jpg"
  },
  {
      name: "Satin Brown Bonnet",
      price: 20,
      description: "A stylish satin brown bonnet with stretchy tie band.",
      image: "Satin Bonnet Silk Sleep Cap Hair Bonnets for Women Stretchy Tie Band Hair Cap for Curly Hair Silk Hair Wrap(Coffee + Champagne).jpg"
  },
  {
      name: "Pink Silky Bonnet",
      price: 25,
      description: "A luxury thin satin pink bonnet for a soft feel.",
      image: "luxury thin satin bonnet.jpg"
  },

    {
      name: "Silk Scrunchie",
      price: 15,
      description: "A silk scrunchie to prevent hair damage.",
      image: "silk scrunchie.jpg"
    },
    {
      name: "Large Silk Scrunchie",
      price: 18,
      description: "A large silk scrunchie for thicker hair.",
      image: "large silk scrunchie.jpg"
    },
    {
      name: "Velvet Scrunchie",
      price: 12,
      description: "Soft velvet scrunchie for comfort and style.",
      image: "velvet scrunchie.jpg"
    },
    {
      name: "Grey Scrunchie",
      price: 10,
      description: "A classic grey scrunchie for every day.",
      image: "grey scrunchie.jpg"
    },
    {
      name: "Red Scrunchie",
      price: 16,
      description: "A stylish red scrunchie, perfect for any hairstyle.",
      image: "Hair Accessory Set.jpg"
    },
    {
      name: "Magic Mauve Satin Crown Headband",
      price: 13,
      description: "A beautiful mauve satin headband with a crown style.",
      image: "Magic Mauve Satin Crown Headband.jpg"
    },
    {
      name: "Pearl Satin Scrunchie",
      price: 19,
      description: "An oversized scrunchie with elegant pearl details.",
      image: "Oversized Pearl Satin Scrunchie.jpg"
    },
    {
      name: "Cream & Black Silk Scrunchie",
      price: 16,
      description: "A luxurious cream and black silk scrunchie, handmade in Italy.",
      image: "Pure Italian Silk SCRUNCHIE_HANDMADEHair Accessories_made in ItalyEtsy.jpg"
    },
    {
      name: "Wooden Beads",
      price: 10,
      description: "Natural wooden beads for hair braids.",
      image: "wooden beads.jpg"
    },
    {
      name: "Clear Beads",
      price: 7,
      description: "Clear beads that add a simple shine to any hairstyle.",
      image: "clear beads.jpg"
    },
    {
      name: "Purple, Pink and Blue Beads",
      price: 8,
      description: "Colorful beads for creative hair accessories.",
      image: "Purple, pink and blue beads.jpg"
    },
    {
      name: "Translucent Hair Beads",
      price: 6,
      description: "Translucent beads for a delicate touch.",
      image: "Translucent hair beads.jpg"
    },
    {
      name: "Wooden African Beads",
      price: 9,
      description: "Wooden beads perfect for DIY jewelry making or braiding.",
      image: "Modpion 270Pcs Large Hole Barrel Wooden Bead 16x17mm Painted Wood Beads for Macrame Dreadlock Hair Braid Bead for DIY Bracelet,Necklace,Jewelry Making and Hair Braid Bead Project.jpg"
  },
  {
      name: "Shell Gold Beads",
      price: 6,
      description: "Shell gold beads for braids, jewelry, and other creative uses.",
      image: "Baba 10 Pieces Shell Gold Chic Style Braiding DIY Accessory Dread lock Hair Beads Hair Braid Pins Rings Cuff Clips Tibetan Jewelry Decor.jpg"
  },
  {
      name: "Heart & Star Shape Beads",
      price: 6,
      description: "Heart and star shaped beads perfect for adding charm to your creations.",
      image: "-4.jpg"
  },
  {
      name: "Indie Colourful Beads",
      price: 6,
      description: "A set of colorful beads for indie style jewelry and crafts.",
      image: "Indie colorful aesthetic.jpg"
  },

    {
      name: "Matte Hair Claw Clip",
      price: 10,
      description: "A matte finish hair claw clip.",
      image: "matte hair claw clip.jpg"
    },
    {
      name: "Pearl Hair Clips",
      price: 8,
      description: "Elegant pearl hair clips for any occasion.",
      image: "pearl hair clips.jpg"
    },
    {
      name: "Salon Hairdressing Clip",
      price: 5,
      description: "A professional salon-grade hairdressing clip.",
      image: "Salon hairdressing clip.jpg"
    },
    {
      name: "Small Hair Clips",
      price: 7,
      description: "Small hair clips for everyday styling.",
      image: "small hair clips.jpg"
    },
    {
      name: "Boutique Bow",
      price: 20,
      description: "A boutique-style bow for an elegant look.",
      image: "Boutique bows.jpg"
    }
  ];
  //Question (b)An updated product list must be kept on localStorage, as AllProducts
  // this stores the  products in  a localStorage
  localStorage.setItem('AllProducts', JSON.stringify(products));
  
// this function is used to add a product to the cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in local storage
    alert(`${product.name} has been added to your cart!`); // Show success message
}
//Question 2(i):1.	When a user clicks the “Add to Cart” button, add the selected product to the user’s shopping cart. 
// An event listeners for the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productName = productElement.getAttribute('data-name');
        const productPrice = productElement.getAttribute('data-price');

        // this create product object
        const product = {
            name: productName,
            price: parseFloat(productPrice),
        };

        // Call function to add the product to cart
        addToCart(product);
    });
});



// Sample product list
const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999, img: 'laptop.jpg' },
  { id: 2, name: 'Headphones', category: 'Electronics', price: 199, img: 'headphones.jpg' },
  { id: 3, name: 'Coffee Maker', category: 'Home Appliances', price: 49, img: 'coffee maker.jpg' },
  { id: 4, name: 'T-shirt', category: 'Clothing', price: 25, img: 't-shirt.jpg' },
  { id: 5, name: 'Running Shoes', category: 'Footwear', price: 120, img: 'shoes.jpg' },
  { id: 6, name: 'Smartphone', category: 'Electronics', price: 799, img: 'smartphone.jpg' }
];

// Track products the user has interacted with
let viewedProducts = [9];

// Function to render products dynamically
function displayProducts() {
  const productGrid = document.getElementById('product-grid');
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="viewProduct(${product.id})">View Product</button>
    `;
    productGrid.appendChild(productElement);
  });
}

// Function to simulate viewing a product
function viewProduct(id) {
  const viewedProduct = products.find(product => product.id === id);
  
  // Only add the product if it hasn't been viewed before
  if (!viewedProducts.includes(viewedProduct)) {
    viewedProducts.push(viewedProduct);
  }

  // Show recommendations based on the product category
  showRecommendations(viewedProduct.category);
}

// Function to display product recommendations based on viewed product's category
function showRecommendations(category) {
  const recommendationGrid = document.getElementById('recommendation-grid');
  recommendationGrid.innerHTML = ''; // Clear previous recommendations

  // Filter products that belong to the same category and haven't been viewed
  const recommendedProducts = products.filter(product =>
    product.category === category && !viewedProducts.includes(product)
  );

  // Render recommended products
  recommendedProducts.forEach(product => {
    const recommendationElement = document.createElement('div');
    recommendationElement.classList.add('recommendation');
    recommendationElement.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
    `;
    recommendationGrid.appendChild(recommendationElement);
  });
}

// Load products when the page is loaded
window.onload = displayProducts;

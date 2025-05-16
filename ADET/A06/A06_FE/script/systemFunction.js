// The bills, total, date, etc., are not stored in the database.
// Only the categories and products are stored in the database.

var cart = [];
var subtotal = 0;
var discount = 0;
var tax = 0;
var total = 0;
var selectedPayment = '';
var selectedCategoryIndex = 1; 
var categories = [];
var products = [];

const getAllCategories = async () => {
  fetch(
    'http://localhost/A06/A06_BE/categories.php'
  )
    .then(response => response.json())
    .then(data => {
      categories = data;
      loadCategories();
    });
};

const getAllProducts = async (categoryID) => {
  fetch(
    'http://localhost/A06/A06_BE/products.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ categoryID: categoryID })
    })
    .then(response => response.json())
    .then(data => {
      products = Array.isArray(data) ? data : [];
      loadProducts(categoryID);
    });
};

function generateBillNumber() {
  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}

function updateBillNumber() {
  var billNumber = generateBillNumber();
  document.getElementById("bill-details").textContent = 'BILL DETAILS #' + billNumber;
}

function setCurrentDate() {
  var today = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("currentDate").textContent = today.toLocaleDateString('en-US', options);
}

function loadCategories() {
  var categoriesContainer = document.getElementById("categories");
  categoriesContainer.innerHTML = '';


  categories.forEach((category, index) => {
    var imageHtml = category.picture ? `<img src="` + category.picture + `" class="product-image" alt="` + (category.categoryName || category.category) + `">` : '';
    categoriesContainer.innerHTML += `
     <div onclick="getAllProducts(` + category.categoryID + `, '` + (category.categoryName || category.category) + `')" class="card mx-1 custom-button text-center ${index === selectedCategoryIndex ? '' : ''}">
        ` + imageHtml + `
        <small>` + (category.categoryName || category.category) + `</small>
      </div>
    `;
  });
}
function loadProducts(categoryID) {
  selectedCategoryIndex = categoryID;
  var maincontainer = document.getElementById("maincontainer");
  maincontainer.innerHTML = '';

  products.forEach((content, contentIndex) => {
    if (!content.isAvailable) return;

    var selectedSize = content.selectedSize || '';
    var sizeObj = content.product_sizes.find(s => s.sizeCode === selectedSize);
    var basePrice = sizeObj ? Number(sizeObj.price).toFixed(2) : Number(content.basePrice).toFixed(2);
    maincontainer.innerHTML += `
      <div class="product-card">
       <img src="` + content.picture + `" alt="` + content.productName + `">
        <div>` + content.productName + `</div>
        <div class="price">₱` + basePrice + `</div>
        <div class="custom-option">
          <span>Size</span>
          <div>
            <button class="` + (selectedSize === 'S' ? 'active' : '') + `" onclick="setSize(` + categoryID + `, ` + contentIndex + `, 'S')">S</button>
            <button class="` + (selectedSize === 'M' ? 'active' : '') + `" onclick="setSize(` + categoryID + `, ` + contentIndex + `, 'M')">M</button>
            <button class="` + (selectedSize === 'L' ? 'active' : '') + `" onclick="setSize(` + categoryID + `, ` + contentIndex + `, 'L')">L</button>
          </div>
        </div>
        <button class="add-to-cart" onclick="addToCart(` + categoryID + `, ` + contentIndex + `)">Add to Cart</button>
      </div>
    `;
  });
}

function setSize(categoryIndex, contentIndex, size) {
  products[contentIndex].selectedSize = size;
  var sizeObj = products[contentIndex].product_sizes.find(s => s.sizeCode === size);
  products[contentIndex].price = sizeObj ? Number(sizeObj.price) : products[contentIndex].basePrice;
  loadProducts(categoryIndex);
}

function addToCart(categoryIndex, contentIndex) {
  var product = products[contentIndex];
  var size = product.selectedSize;

// If no size is selected
  if (!size) {
    alert('Please select a size before adding to cart.');
    return;
  }

  var sizeObj = product.product_sizes.find(s => s.sizeCode === size);
  var price = sizeObj ? Number(sizeObj.price) : product.basePrice;

  var existingItem = cart.find(item => item.code === product.code && item.size === size);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    var cartItem = {
      name: product.productName,
      code: product.code,
      size: size,
      price: price,
      quantity: 1
    };
    cart.push(cartItem);
  }

  updateCart();
}

function updateCart() {
  subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });
  tax = subtotal * 0.01;
  total = subtotal - discount + tax;

  var receiptContainer = document.getElementById("receipt-items");
  receiptContainer.innerHTML = '';
  cart.forEach((item, index) => {
    receiptContainer.innerHTML += `
      <div class="receipt-item">
        <div>
         <div>` + item.code + ` x` + item.quantity + `</div>
            <small>Size: ` + item.size + `</small>
          </div>
          <div>₱` + (item.price * item.quantity).toFixed(2) + `</div>
      </div>
    `;
  });

  document.getElementById("subtotalValue").innerHTML = '₱' + subtotal.toFixed(2);
  document.getElementById("discountValue").innerHTML = '-₱' + discount.toFixed(2);
  document.getElementById("taxValue").innerHTML = '₱' + tax.toFixed(2);
  document.getElementById("totalValue").innerHTML = '₱' + total.toFixed(2);
}

function searchProducts(query) {
  var maincontainer = document.getElementById("maincontainer");
  maincontainer.innerHTML = '';
  query = query.toLowerCase().trim();
  if (query === '') {
    loadProducts(selectedCategoryIndex);
    return;
  }

  var seenNames = new Set();
  var matchingProducts = [];

  products.forEach((content, contentIndex) => {
    var contentNameLower = content.productName.toLowerCase();
    if (content.isAvailable && contentNameLower.includes(query)) {
      matchingProducts.push({
        categoryIndex: selectedCategoryIndex,
        contentIndex: contentIndex,
        content: content,
        exactMatch: contentNameLower === query
      });
    }
  });

  matchingProducts.sort((a, b) => {
    if (a.exactMatch && !b.exactMatch) return -1;
    if (!a.exactMatch && b.exactMatch) return 1;
    return a.content.productName.localeCompare(b.content.productName);
  });

  matchingProducts.forEach(({ categoryIndex, contentIndex, content }) => {
    var contentNameLower = content.productName.toLowerCase();
    if (!seenNames.has(contentNameLower)) {
      seenNames.add(contentNameLower);
      var selectedSize = content.selectedSize || content.product_sizes[0]?.sizeCode || 'S';
      var sizeObj = content.product_sizes.find(s => s.sizeCode === selectedSize);
      var displayPrice = sizeObj ? Number(sizeObj.price).toFixed(2) : Number(content.basePrice).toFixed(2);
      maincontainer.innerHTML += `
        <div class="product-card">
              <img src="` + content.picture + `" alt="` + content.productName + `">
              <div>` + content.productName + `</div>
              <div class="price">₱` + displayPrice + `</div>
              <div class="custom-option">
                <span>Size</span>
                <div>
                  <button class="` + (selectedSize === 'S' ? 'active' : '') + `" onclick="setSize(` + categoryIndex + `, ` + contentIndex + `, 'S')">S</button>
                  <button class="` + (selectedSize === 'M' ? 'active' : '') + `" onclick="setSize(` + categoryIndex + `, ` + contentIndex + `, 'M')">M</button>
                  <button class="` + (selectedSize === 'L' ? 'active' : '') + `" onclick="setSize(` + categoryIndex + `, ` + contentIndex + `, 'L')">L</button>
                </div>
              </div>
              <button class="add-to-cart" onclick="addToCart(` + categoryIndex + `, ` + contentIndex + `)">Add to Cart</button>
            </div>
          `;
    }
  });
}

function selectPayment(method) {
  selectedPayment = method;
  document.getElementById("cashButton").classList.remove("active");
  document.getElementById("cardButton").classList.remove("active");
  if (method === 'Cash') {
    document.getElementById("cashButton").classList.add("active");
  } else if (method === 'Card') {
    document.getElementById("cardButton").classList.add("active");
  }
}

function proceedTransaction() {
  if (cart.length === 0) {
    alert("Cart is empty. Please add items before proceeding.");
    return;
  }
  if (!selectedPayment) {
    alert("Please select a payment method.");
    return;
  }
  alert('Transaction processed successfully via ' + selectedPayment + '!\nTotal: ₱' + total.toFixed(2));
  cart = [];
  subtotal = 0;
  discount = 0;
  tax = 0;
  total = 0;
  selectedPayment = '';
  updateCart();
  updateBillNumber();
  selectPayment('');
}

// Initialize
updateBillNumber();
setCurrentDate();
getAllCategories();
getAllProducts(1);
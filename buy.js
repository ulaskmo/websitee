
displayCartItems();

function displayCartItems() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartContainer = document.getElementById('cartItems');
    var totalPrice = 0;

    cartContainer.innerHTML = ''; // Clear existing items

    cart.forEach(function(item, index) {
        var itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>Product: ${item.name}</p>
            <p>Price: €${item.price}</p>
            <p>Quantity: <input type="number" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"></p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);

        totalPrice += item.price * item.quantity;
    });

    document.getElementById('totalPrice').textContent = `€${totalPrice.toFixed(2)}`;
    updateCartIcon();
}

function updateQuantity(index, quantity) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity = parseInt(quantity, 10);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems(); // Refresh the cart display
    }
}

function removeFromCart(index) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Refresh the cart display
}

function proceedToCheckout() {
    // Implement the checkout process
    alert('Proceeding to Checkout');
}

function addToCart(productName, price) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push({ name: productName, price: price, quantity: 1 });

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show alert
    alert('Item added to your cart');

    // Update cart display and icon
    displayCartItems();
    updateCartIcon(); // it doesnt work
}


function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    let cartIcon = document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        cartIcon.textContent = ` Cart (${itemCount})`; // Update textContent with item count
    }
}
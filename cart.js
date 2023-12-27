document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html'; // Redirect to login page if not logged in
    } else {
        displayCartItems();
        document.getElementById('checkoutButton').addEventListener('click', proceedToCheckout);
    }
});

function displayCartItems() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartContainer = document.getElementById('cartItems');
    var totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No items in the cart. Add items before checking out.</p>';
        document.getElementById('totalPrice').textContent = '€0.00';
        return;
    }

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
}

function updateQuantity(index, quantity) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity = quantity;
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
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert('You need to add items to the cart before proceeding to checkout.');
    } else {
        // Implement the checkout process
        alert('Proceeding to Checkout');

    }   /////IT DOESNT WORK ALSO
}

function addToCart(productName, price) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++; // Increase the quantity if the product already exists in the cart
    } else {
        cart.push({ name: productName, price: price, quantity: 1 }); // Add new product to the cart
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' added to cart.');
}

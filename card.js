document.addEventListener('DOMContentLoaded', function () {
    // Correctly selecting the form inside the container with the 'mt-5' class
    var paymentForm = document.querySelector('.container.mt-5 form');

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var cardNumber = document.getElementById('cardNumber').value;
        var cvv = document.getElementById('cvv').value;

        if (cardNumber === '1234 5678 1234 5678' && cvv === '123') {

            alert('Payment is done. Thank you!');

            clearCart();
            location.reload();
            window.location.href = window.location.href;

        } else {
            alert('Invalid card details.');
        }
    });
});



function formatCardNumber() {
    var cardNumber = document.getElementById('cardNumber');
    cardNumber.value = cardNumber.value
        .replace(/[^\d ]/g, '')  // Remove non-digit characters
        .replace(/(\d{4})(?=\d)/g, '$1 ')  // Add space after every 4 digits
        .trim();  // Trim any extra space at the end
}

function clearCart() {
    console.log('Clearing the cart...');
    localStorage.removeItem('cart');
    // Optionally, update the cart display and icon after clearing the cart
    displayCartItems();
    updateCartIcon();
}

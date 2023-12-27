function redirectToCheckout(event) {
    if (localStorage.getItem('loggedIn') === 'true') {

        window.location.href = 'checkout.html';

        event.preventDefault();
    }
}

if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html'; // Redirect to login page
}

document.addEventListener('DOMContentLoaded', function() {
    displayUserDetails();
});

function displayUserDetails() {
    var name = localStorage.getItem('userName');
    var email = localStorage.getItem('userEmail');

    if (name && email) {
        document.getElementById('displayName').textContent = 'Password: ' + name;
        document.getElementById('displayEmail').textContent = 'Email: ' + email;
    } else {
        document.getElementById('displayName').textContent = 'Name: Not logged in';
        document.getElementById('displayEmail').textContent = 'Email: Not logged in';
    }
}
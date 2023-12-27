document.addEventListener('DOMContentLoaded', function() {
    updateLoginLink();
    checkLoginFormDisplay();
});

document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    validateLogin3();
};

function validateLogin3() {
    var name = document.getElementById('inputNAME').value;
    var email = document.getElementById('inputEmail').value;
    var newPassword = document.getElementById('inputNewPassword').value;
    var confirmPassword = document.getElementById('inputConfirmPassword').value;

    localStorage.setItem('userNAME', name); // Store user name
    localStorage.setItem('userEmail', email); // Store user email

    if (!name || !email || !newPassword || !confirmPassword) {
        alert("Please fill in all fields.");
        return false;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (typeof updateLoginLink === 'function') {
        updateLoginLink(true); // Set loggedIn to true
    }

    alert("Registered successfully");
    window.location.href = "index.html"; // Change "index.html" to your desired page

    // Prevent form submission (optional, as the page will be redirected)
    return false;
}

function logout() {
    localStorage.removeItem('loggedIn');
    updateLoginLink();
    alert('You have been logged out.');
}

function updateLoginLink() {
    var loggedIn = localStorage.getItem('loggedIn') === 'true';
    var loginLink = document.getElementById('loginLink');
    if (loggedIn) {
        loginLink.innerHTML = 'Log out';
        loginLink.href = '#';
        loginLink.onclick = logout;
        document.getElementById('registerForm').style.display = 'none';
    } else {
        loginLink.innerHTML = 'Login';
        loginLink.href = 'login.html';
        loginLink.onclick = null;
    }
}

function checkLoginFormDisplay() {
    var loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!loggedIn) {
        document.getElementById('registerForm').style.display = 'block';
    }
}

// Call the function to check and update the login link on page load
updateLoginLink();

document.addEventListener('DOMContentLoaded', function() {
    updateLoginLink();
    checkLoginFormDisplay();
});

document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission
    validateLogin();
};
 
function validateLogin() {
    var name = document.getElementById('inputUserName').value;
    var email = document.getElementById('inputEmail').value;

    if (name === '123456' && email === 'ulas@gmail.com') {
        alert('Login successful');
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userName', name); // Store user name
        localStorage.setItem('userEmail', email); // Store user email
        // Call updateLoginLink() if it's defined
        if (typeof updateLoginLink === 'function') {
            updateLoginLink();
        }
    } else {
        alert('Access Denied: Incorrect Credentials');
    }
    return false; // Prevent default form submission
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
        document.getElementById('loginForm').style.display = 'none';
    } else {
        loginLink.innerHTML = 'Login';
        loginLink.href = 'login.html';
        loginLink.onclick = null;
    }
}

function checkLoginFormDisplay() {
    var loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!loggedIn) {
        document.getElementById('loginForm').style.display = 'block';
    }
}

/*function forgotLogin() {
    var email = document.getElementById('inputEmail').value;
    var newPassword = document.getElementById('inputNewPassword').value;
    var inputConfirmPassword = document.getElementById('inputConfirmPassword').value;

    if (email === 'ulas@gmail.com' && newPassword === inputConfirmPassword) {
        alert("Login Successful");
    } else {
        alert("Access Denied");
    }
}*/ 

// IT DOESNT WORK



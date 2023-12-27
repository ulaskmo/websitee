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
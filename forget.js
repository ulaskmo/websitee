
function validateLogin2() {
    var userEmail = document.getElementById('inputEmail').value;
    var newPassword = document.getElementById('inputNewPassword').value;
    var confirmPassword = document.getElementById('inputConfirmPassword').value;

    // Check if userEmail is "ulas@gmail.com"
    if (userEmail !== 'ulas@gmail.com') {
        alert("Incorrect email. Please enter 'ulas@gmail.com'.");
        return false;
    }

    if (!newPassword || !confirmPassword) {
        alert("Please fill in all fields.");
        return false;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (typeof updateLoginLink === 'function') {
        updateLoginLink();
    }

    alert("password changed succesfully")
    window.location.href = "login.html"; // Change "login.html" to your actual login page

        // Prevent form submission (optional, as the page will be redirected)
        return false;
}

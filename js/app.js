
 function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');
    var emailValue = emailInput.value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        errorMessage.style.display = 'block'; 
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
    }
}
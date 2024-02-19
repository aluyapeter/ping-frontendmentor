
function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorMessage = document.getElementById('error-message');
    var emailValue = emailInput.value;

    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        errorMessage.style.display = 'block'; // Display error message
        return false; // Prevent form submission
    } else {
        errorMessage.style.display = 'none'; // Hide error message
        // You can perform additional actions here before submitting the form
        return true; // Allow form submission
    }
}
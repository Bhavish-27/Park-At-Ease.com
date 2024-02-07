// first.js (Your existing script)
function toggleForm(formId) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';

    document.getElementById(formId).style.display = 'block';
}

// Additional script for form validation
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the input fields
    var phoneNumberInput = document.getElementById("phoneNumber");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");

    // Add event listeners to reset custom validity messages when inputs change
    phoneNumberInput.addEventListener("input", function() {
    if (/^\d{10}$/.test(this.value)) {
        this.setCustomValidity("");
    } else {
        this.setCustomValidity("Please enter a valid 10-digit phone number containing only numeric characters.");
    }

    // Remove non-numeric characters from the input
    this.value = this.value.replace(/\D/g, '');
});

    passwordInput.addEventListener("input", function() {
        confirmPasswordInput.setCustomValidity(""); // Reset confirm password validity when password changes
    });

    confirmPasswordInput.addEventListener("input", function() {
        if (this.value === passwordInput.value) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("Passwords do not match.");
        }
    });

    // Function to validate form submission
    function validateSignUp() {
        // Check validity of all input fields
        if (phoneNumberInput.validity.valid && passwordInput.validity.valid && confirmPasswordInput.validity.valid) {
            // If all validations pass, show success message
            alert("Account successfully created!");
            return true;
        } else {
            // If any validation fails, prevent form submission
            return false;
        }
    }

    // Add validateSignUp function to the global scope so it can be called from HTML
    window.validateSignUp = validateSignUp;
});
// Function to show slots buttons
function showSlots() {
    // Hide the login form
    document.getElementById('loginForm').style.display = 'none';

    // Display the slots buttons
    document.getElementById('slotsButtons').style.display = 'block';
}

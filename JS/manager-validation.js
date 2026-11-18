
// Manager Registration Form Validation

// Get the form and message area
var form = document.getElementById("managerForm");
var message = document.getElementById("message");

// Create validation function
function validateForm() {

    // Get input values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    var qualification = document.getElementById("qualification").value;
    var experience = document.getElementById("experience").value;

    // Store error messages
    var errors = [];

    // Regular Expressions
    var namePattern = /^[A-Za-z ]+$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var phonePattern = /^01[3-9][0-9]{8}$/;

    // 1. Name Validation
    if (name == "") {
        errors.push("Full Name is required.");
    }
    else if (!namePattern.test(name)) {
        errors.push("Name should contain only letters.");
    }

    // 2. Email Validation
    if (email == "") {
        errors.push("Email is required.");
    }
    else if (!emailPattern.test(email)) {
        errors.push("Enter a valid email address.");
    }

    // 3. Phone Number Validation
    if (phone == "") {
        errors.push("Phone Number is required.");
    }
    else if (!phonePattern.test(phone)) {
        errors.push("Enter a valid 11-digit phone number starting with 013-019.");
    }

    // 4. Gender Validation
    var gender = document.querySelectorAll('input[name="gender"]:checked');

    if (gender.length == 0) {
        errors.push("Please select your gender.");
    }

    // 5. Username Validation
    var username = document.getElementById("username").value.trim();

    if (username == "") {
        errors.push("Username is required.");
    }
    else if (username.length < 4) {
        errors.push("Username must contain at least 4 characters.");
    }

    // 6. Password Validation
    if (password == "") {
        errors.push("Password is required.");
    }
    else if (password.length < 6 || !/[0-9]/.test(password)) {
        errors.push("Password must contain at least 6 characters and one number.");
    }

    // 7. Confirm Password Validation
    if (confirm == "") {
        errors.push("Please confirm your password.");
    }
    else if (password != confirm) {
        errors.push("Passwords do not match.");
    }

    // 8. Educational Qualification Validation
    if (qualification == "") {
        errors.push("Please select your educational qualification.");
    }

    // 9. Work Experience Validation
    if (experience == "") {
        errors.push("Please select your work experience.");
    }

    // 10. Management Skills Validation
    var skills = document.querySelectorAll('input[name="skills"]:checked');

    if (skills.length == 0) {
        errors.push("Please select at least one management skill.");
    }

    // 11. Terms and Conditions Validation
    var terms = document.getElementById("terms").checked;

    if (!terms) {
        errors.push("You must agree to the terms and conditions.");
    }

    // Display Error Messages
    if (errors.length > 0) {

        var errorMessage = "<h3>Please fix the following errors:</h3>";
        errorMessage += "<ul>";

        for (var i = 0; i < errors.length; i++) {
            errorMessage += "<li>" + errors[i] + "</li>";
        }

        errorMessage += "</ul>";

        message.innerHTML = errorMessage;
        message.style.color = "red";

        return false;
    }

    // Display Success Message
    else {

        message.innerHTML = "<h3>Registration Successful!</h3>";
        message.style.color = "green";

        return true;
    }
}

// Submit Event
form.addEventListener("submit", function(event) {

    // Prevent form submission
    event.preventDefault();

    // Call validation function
    validateForm();

});

// Change Event
form.addEventListener("change", function() {

    message.innerHTML = "";

});

// Click Event (Clear Form Button)
var clearButton = document.querySelector('input[type="reset"]');

clearButton.addEventListener("click", function() {

    message.innerHTML = "";

});


const form1 = document.getElementById("loginForm");

function validateLogin(event) {

    event.preventDefault();

    const category = document.querySelector('input[name="category"]:checked');
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("successMessage");

    // Clear Previous Errors
    document.getElementById("categoryError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    message.innerHTML = "";

    // Required Field Validation
    if (category == null || email == "" || password == "") {

        if (category == null) {
            document.getElementById("categoryError").innerHTML = "Please select a user category";
        }

        if (email == "") {
            document.getElementById("emailError").innerHTML = "Email cannot be empty";
        }

        if (password == "") {
            document.getElementById("passwordError").innerHTML = "Password cannot be empty";
        }
    }

    // Email Validation
    else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
    }

    // Password Validation
    else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least 6 characters";
    }

    // Successful Login
    else {
        message.style.color = "green";
        message.innerHTML = "Login Successful!";
    }
}


// Category Change
document.querySelectorAll('input[name="category"]').forEach(function(radio) {

    radio.addEventListener("change", function() {
        document.getElementById("categoryError").innerHTML = "";
    });

});


// Email Input
document.getElementById("email").addEventListener("input", function() {
    document.getElementById("emailError").innerHTML = "";
});


// Password Input
document.getElementById("password").addEventListener("input", function() {
    document.getElementById("passwordError").innerHTML = "";
});


// Reset Event
form1.addEventListener("reset", function() {

    document.getElementById("categoryError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

});

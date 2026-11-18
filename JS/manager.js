
const form1 = document.getElementById("managerForm");

form1.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById("address").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const qualification = document.getElementById("qualification").value;
    const experience = document.getElementById("experience").value;
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    const terms = document.getElementById("terms").checked;

    // Clear Previous Errors
    const errorIds = [
        "nameError", "emailError", "phoneError", "genderError",
        "addressError", "usernameError", "passwordError",
        "confirmError", "qualificationError", "experienceError",
        "skillsError", "termsError"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    document.getElementById("successMessage").innerHTML = "";

    // Required Field Validation
    if (
        name == "" || email == "" || phone == "" ||
        gender == null || address == "" || username == "" ||
        password == "" || confirm == "" || qualification == "" ||
        experience == "" || skills.length < 2 || terms == false
    ) {

        if (name == "") {
            document.getElementById("nameError").innerHTML = "Name cannot be empty";
        }

        if (email == "") {
            document.getElementById("emailError").innerHTML = "Email cannot be empty";
        }

        if (phone == "") {
            document.getElementById("phoneError").innerHTML = "Phone cannot be empty";
        }

        if (gender == null) {
            document.getElementById("genderError").innerHTML = "Please select your gender";
        }

        if (address == "") {
            document.getElementById("addressError").innerHTML = "Address cannot be empty";
        }

        if (username == "") {
            document.getElementById("usernameError").innerHTML = "Username cannot be empty";
        }

        if (password == "") {
            document.getElementById("passwordError").innerHTML = "Password cannot be empty";
        }

        if (confirm == "") {
            document.getElementById("confirmError").innerHTML = "Please confirm your password";
        }

        if (qualification == "") {
            document.getElementById("qualificationError").innerHTML = "Please select your qualification";
        }

        if (experience == "") {
            document.getElementById("experienceError").innerHTML = "Please select your experience";
        }

        if (skills.length < 2) {
            document.getElementById("skillsError").innerHTML = "Select at least 2 skills";
        }

        if (terms == false) {
            document.getElementById("termsError").innerHTML = "Please accept Terms and Conditions";
        }
    }

    // Name Validation
    else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML = "Name should contain only letters";
    }

    // Email Validation
    else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
    }

    // Phone Validation
    else if (!/^01[3-9][0-9]{8}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter a valid 11-digit phone number";
    }

    // Address Validation
    else if (address.length < 15) {
        document.getElementById("addressError").innerHTML = "Address must contain at least 15 characters";
    }

    // Username Validation
    else if (username.length < 5) {
        document.getElementById("usernameError").innerHTML = "Username must contain at least 5 characters";
    }

    // Password Validation
    else if (password.length < 6 || !/[0-9]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must contain 6 characters and one number";
    }

    // Confirm Password Validation
    else if (password != confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
    }

    // Successful Registration
    else {
        document.getElementById("successMessage").innerHTML = "Registration Successful!";
    }

});


// Reset Event
form1.addEventListener("reset", function() {

    const errorIds = [
        "nameError", "emailError", "phoneError", "genderError",
        "addressError", "usernameError", "passwordError",
        "confirmError", "qualificationError", "experienceError",
        "skillsError", "termsError"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    document.getElementById("successMessage").innerHTML = "";

});


// Qualification Change
document.getElementById("qualification").addEventListener("change", function() {
    document.getElementById("qualificationError").innerHTML = "";
});

// Experience Change
document.getElementById("experience").addEventListener("change", function() {
    document.getElementById("experienceError").innerHTML = "";
});


const form1 = document.getElementById("customerForm");

form1.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const city = document.getElementById("city").value;
    const guests = document.getElementById("guests").value;
    const budget = document.getElementById("budget").value;

    const gender = document.querySelector('input[name="gender"]:checked');
    const eventtype = document.querySelector('input[name="eventtype"]:checked');
    const interests = document.querySelectorAll('input[name="interests"]:checked');
    const terms = document.getElementById("terms").checked;

    const message = document.getElementById("successMessage");

    // Clear Previous Errors
    const errorIds = [
        "nameError", "emailError", "phoneError", "dobError",
        "genderError", "addressError", "usernameError",
        "passwordError", "confirmError", "cityError",
        "eventError", "guestsError", "budgetError",
        "interestsError", "termsError"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    message.innerHTML = "";

    // Required Field Validation
    if (
        name == "" || email == "" || phone == "" ||
        dob == "" || gender == null || address == "" ||
        username == "" || password == "" || confirm == "" ||
        city == "" || eventtype == null || guests == "" ||
        budget == "" || interests.length == 0 || terms == false
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

        if (dob == "") {
            document.getElementById("dobError").innerHTML = "Date of birth is required";
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

        if (city == "") {
            document.getElementById("cityError").innerHTML = "Please select your city";
        }

        if (eventtype == null) {
            document.getElementById("eventError").innerHTML = "Please select an event type";
        }

        if (guests == "") {
            document.getElementById("guestsError").innerHTML = "Please enter number of guests";
        }

        if (budget == "") {
            document.getElementById("budgetError").innerHTML = "Please select your budget range";
        }

        if (interests.length == 0) {
            document.getElementById("interestsError").innerHTML = "Please select at least one interest";
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
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
    }

    // Phone Validation
    else if (!/^01[3-9][0-9]{8}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter a valid 11-digit phone number";
    }

    // Date of Birth Validation
    else {
        const birthDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();

        const month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (birthDate > today) {
            document.getElementById("dobError").innerHTML = "Date of birth cannot be in the future";
        }

        else if (age < 18) {
            document.getElementById("dobError").innerHTML = "You must be at least 18 years old";
        }

        else if (address.length < 10) {
            document.getElementById("addressError").innerHTML = "Address must contain at least 10 characters";
        }

        else if (username.length < 4) {
            document.getElementById("usernameError").innerHTML = "Username must contain at least 4 characters";
        }

        else if (password.length < 6 || !/[0-9]/.test(password)) {
            document.getElementById("passwordError").innerHTML = "Password must contain at least 6 characters and one number";
        }

        else if (password != confirm) {
            document.getElementById("confirmError").innerHTML = "Passwords do not match";
        }

        else if (Number(guests) < 1) {
            document.getElementById("guestsError").innerHTML = "Number of guests must be at least 1";
        }

        else {
            message.style.color = "green";
            message.innerHTML = "Customer Registration Successful!";
        }
    }

});


// Reset Event
form1.addEventListener("reset", function() {

    const errorIds = [
        "nameError", "emailError", "phoneError", "dobError",
        "genderError", "addressError", "usernameError",
        "passwordError", "confirmError", "cityError",
        "eventError", "guestsError", "budgetError",
        "interestsError", "termsError"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    document.getElementById("successMessage").innerHTML = "";

});


// City Change Event
document.getElementById("city").addEventListener("change", function() {
    document.getElementById("cityError").innerHTML = "";
});


// Budget Change Event
document.getElementById("budget").addEventListener("change", function() {
    document.getElementById("budgetError").innerHTML = "";
});


// Gender Change Event
document.querySelectorAll('input[name="gender"]').forEach(function(radio) {
    radio.addEventListener("change", function() {
        document.getElementById("genderError").innerHTML = "";
    });
});


// Event Type Change Event
document.querySelectorAll('input[name="eventtype"]').forEach(function(radio) {
    radio.addEventListener("change", function() {
        document.getElementById("eventError").innerHTML = "";
    });
});


// Interests Change Event
document.querySelectorAll('input[name="interests"]').forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {

        const interests = document.querySelectorAll('input[name="interests"]:checked');

        if (interests.length > 0) {
            document.getElementById("interestsError").innerHTML = "";
        }

    });
});

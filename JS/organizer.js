
const form1 = document.getElementById("organizerForm");

form1.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const orgname = document.getElementById("orgname").value;
    const eventtype = document.getElementById("eventtype").value;
    const experience = document.getElementById("experience").value;

    const gender = document.querySelector('input[name="gender"]:checked');
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    const terms = document.getElementById("terms").checked;

    const message = document.getElementById("successMessage");

    // Clear Previous Errors
    const errorIds = [
        "nameError", "emailError", "phoneError", "genderError",
        "addressError", "usernameError", "passwordError",
        "confirmError", "orgnameError", "eventError",
        "experienceError", "skillsError", "termsError"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    message.innerHTML = "";

    // Validation
    if (
        name == "" || email == "" || phone == "" ||
        gender == null || address == "" || username == "" ||
        password == "" || confirm == "" || orgname == "" ||
        eventtype == "" || experience == "" ||
        skills.length < 2 || terms == false
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

        if (orgname == "") {
            document.getElementById("orgnameError").innerHTML = "Organization name cannot be empty";
        }

        if (eventtype == "") {
            document.getElementById("eventError").innerHTML = "Please select event type";
        }

        if (experience == "") {
            document.getElementById("experienceError").innerHTML = "Please select experience";
        }

        if (skills.length < 2) {
            document.getElementById("skillsError").innerHTML = "Please select at least 2 skills";
        }

        if (terms == false) {
            document.getElementById("termsError").innerHTML = "Please accept Terms and Conditions";
        }
    }

    else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML = "Name should contain only letters";
    }

    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
    }

    else if (!/^01[3-9][0-9]{8}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter a valid 11-digit phone number";
    }

    else if (address.length < 10) {
        document.getElementById("addressError").innerHTML = "Address must contain at least 10 characters";
    }

    else if (username.length < 4) {
        document.getElementById("usernameError").innerHTML = "Username must contain at least 4 characters";
    }

    else if (password.length < 6 || !/[0-9]/.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must contain 6 characters and one number";
    }

    else if (password != confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
    }

    else if (orgname.length < 3) {
        document.getElementById("orgnameError").innerHTML = "Organization name must contain at least 3 characters";
    }

    else {
        message.style.color = "green";
        message.innerHTML = "Organizer Registration Successful!";
    }

});


// Reset Event
form1.addEventListener("reset", function() {

    const errorIds = [
        "nameError", "emailError", "phoneError", "genderError",
        "addressError", "usernameError", "passwordError",
        "confirmError", "orgnameError", "eventError",
        "experienceError", "skillsError", "termsError"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    document.getElementById("successMessage").innerHTML = "";

});


// Event Type Change
document.getElementById("eventtype").addEventListener("change", function() {
    document.getElementById("eventError").innerHTML = "";
});

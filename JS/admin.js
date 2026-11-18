
const form1 = document.getElementById("adminForm");

form1.addEventListener("submit", function(event) {

    event.preventDefault();

    const adminName = document.getElementById("adminName").value;
    const adminId = document.getElementById("adminId").value;
    const employeeId = document.getElementById("employeeId").value;
    const adminEmail = document.getElementById("adminEmail").value;
    const adminPhone = document.getElementById("adminPhone").value;
    const department = document.getElementById("department").value;
    const password = document.getElementById("adminPassword").value;
    const confirm = document.getElementById("confirmAdminPassword").value;
    const terms = document.getElementById("adminTerms").checked;

    // Clear Previous Errors
    const errorIds = [
        "adminNameError", "adminIdError", "employeeIdError",
        "adminEmailError", "adminPhoneError", "departmentError",
        "adminPasswordError", "confirmAdminPasswordError",
        "adminTermsError"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    document.getElementById("successMessage").innerHTML = "";

    // Required Field Validation
    if (
        adminName == "" || adminId == "" || employeeId == "" ||
        adminEmail == "" || adminPhone == "" || department == "" ||
        password == "" || confirm == "" || terms == false
    ) {

        if (adminName == "") {
            document.getElementById("adminNameError").innerHTML = "Admin name cannot be empty";
        }

        if (adminId == "") {
            document.getElementById("adminIdError").innerHTML = "Admin ID cannot be empty";
        }

        if (employeeId == "") {
            document.getElementById("employeeIdError").innerHTML = "Employee ID cannot be empty";
        }

        if (adminEmail == "") {
            document.getElementById("adminEmailError").innerHTML = "Email cannot be empty";
        }

        if (adminPhone == "") {
            document.getElementById("adminPhoneError").innerHTML = "Phone number cannot be empty";
        }

        if (department == "") {
            document.getElementById("departmentError").innerHTML = "Please select your department";
        }

        if (password == "") {
            document.getElementById("adminPasswordError").innerHTML = "Password cannot be empty";
        }

        if (confirm == "") {
            document.getElementById("confirmAdminPasswordError").innerHTML = "Please confirm your password";
        }

        if (terms == false) {
            document.getElementById("adminTermsError").innerHTML = "Please accept the confirmation";
        }
    }

    // Admin Name Validation
    else if (!/^[A-Za-z ]+$/.test(adminName)) {
        document.getElementById("adminNameError").innerHTML = "Name should contain only letters";
    }

    // Admin ID Validation
    else if (!/^ADM[0-9]{4}$/.test(adminId)) {
        document.getElementById("adminIdError").innerHTML = "Admin ID must be like ADM1234";
    }

    // Employee ID Validation
    else if (!/^EMP[0-9]{4}$/.test(employeeId)) {
        document.getElementById("employeeIdError").innerHTML = "Employee ID must be like EMP1234";
    }

    // Email Validation
    else if (!adminEmail.includes("@") || !adminEmail.includes(".")) {
        document.getElementById("adminEmailError").innerHTML = "Please enter a valid email address";
    }

    // Phone Validation
    else if (!/^01[3-9][0-9]{8}$/.test(adminPhone)) {
        document.getElementById("adminPhoneError").innerHTML = "Enter a valid 11-digit phone number";
    }

    // Password Validation
    else if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        document.getElementById("adminPasswordError").innerHTML = "Password must contain 8 characters, one capital letter and one number";
    }

    // Confirm Password Validation
    else if (password != confirm) {
        document.getElementById("confirmAdminPasswordError").innerHTML = "Passwords do not match";
    }

    // Successful Registration
    else {
        document.getElementById("successMessage").style.color = "green";
        document.getElementById("successMessage").innerHTML = "Admin Registration Successful!";
    }

});


// Reset Event
form1.addEventListener("reset", function() {

    const errorIds = [
        "adminNameError", "adminIdError", "employeeIdError",
        "adminEmailError", "adminPhoneError", "departmentError",
        "adminPasswordError", "confirmAdminPasswordError",
        "adminTermsError"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    document.getElementById("successMessage").innerHTML = "";

});


// Department Change
document.getElementById("department").addEventListener("change", function() {
    document.getElementById("departmentError").innerHTML = "";
});

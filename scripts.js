document.addEventListener("DOMContentLoaded", function() {
    const buyNowForm = document.getElementById("buyNowForm");
    const paymentMethodField = document.getElementById("paymentMethod");
    const creditCardFields = document.getElementById("creditCardFields");

    // Show/hide credit card fields based on selected payment method
    paymentMethodField.addEventListener("change", function() {
        if (paymentMethodField.value === "creditCard") {
            creditCardFields.style.display = "block";
        } else {
            creditCardFields.style.display = "none";
        }
    });

    buyNowForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve form data
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;
        const quantity = document.getElementById("quantity").value;
        const paymentMethod = paymentMethodField.value;
        let paymentInfo = "";

        if (paymentMethod === "creditCard") {
            const creditCardNumber = document.getElementById("creditCardNumber").value;
            const expirationDate = document.getElementById("expirationDate").value;
            paymentInfo = `Credit Card Number: ${creditCardNumber}\nExpiration Date: ${expirationDate}`;
        } else {
            paymentInfo = `Payment Method: ${paymentMethod}`;
        }

        // You can perform further processing here, such as sending the form data to a server
        
        // For demonstration purposes, alert the form data
        const formData = `Full Name: ${fullName}\nEmail: ${email}\nShipping Address: ${address}\nQuantity: ${quantity}\n${paymentInfo}`;
        alert(formData);

        // Reset the form
        buyNowForm.reset();
    });
});

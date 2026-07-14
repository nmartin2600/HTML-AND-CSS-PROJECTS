// RECIPE POP UP MODAL SECTION

// Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

// Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

// Get the span element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

// When the user clicks recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on span ("x" symbol), close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

// EMAIL VALIDATION
document.getElementById('contactForm').addEventListener('submit', 
    function (event) {
        // Overrides default browser refresh when submit button is pressed
        event.preventDefault();
        
        // Variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Email pattern checks for text and all symbols needed
        // for an email address such as @ and .
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Use this variable to display messages if fields are filled
        // out or thank you message
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            // Checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields.</p>';
        }
        else if (!emailPattern.test(email)) {
            // Checks if there is a valid email
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email.</p>';
        }
        else {
            // Display thank you message if all fields are filled out correctly
            valMsg.innerHTML = '<p style="color: red;">Thank you for submitting!</p>';
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        // Displays what user wrote in the console
        console.log(JSON.stringify(formData));
    }
)
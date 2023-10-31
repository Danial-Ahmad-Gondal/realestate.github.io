const header = document.getElementById('navbar');
const begin = document.querySelector('.begin');

window.addEventListener('scroll', () => {
    const beginTop = begin.getBoundingClientRect().top;

    // Adjust this value based on the height of the begin section (95vh)
    const scrollThreshold = -500; // Example: for 95vh height

    if (beginTop < scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
//Java script code of CHATGPT starts here//
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// Show the popup when the page loads
window.onload = function () {
    popup.style.display = 'block';
};

// Close the popup when the close button is clicked
closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
});

// Close the popup when clicking outside the form
window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Prevent the form from closing the popup
document.getElementById('popup-form').addEventListener('click', function (event) {
    event.stopPropagation();
});
//AND ENDS HERE//
//now the box field starts here//
// Get references to the buttons and the input fields//
// Get references to the buttons and the box
const forSaleButton = document.getElementById('for-sale-button');
const forRentButton = document.getElementById('for-rent-button');
const box = document.querySelector('.begin > .father > .box');

// Add click event listeners to the buttons
forSaleButton.addEventListener('click', reloadBox);
forRentButton.addEventListener('click', reloadBox);

function reloadBox() {
    // Hide the box (make it disappear)
    box.style.display = 'none';

    // Use a small delay to create the effect of "reloading"
    setTimeout(() => {
        // Show the box again (make it reappear)
        box.style.display = 'block';
    }, 200); // You can adjust the delay duration to control the effect's speed
}


//chat gpt codee of slider//
const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const list = document.getElementById('list');

menuIcon.addEventListener("click", () => {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    list.style.display = 'block';
});

closeIcon.addEventListener("click", () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    list.style.display = 'none';
});
document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading by setting a timeout
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById("loading-screen").style.display = "none";
        // Show the website content
        document.getElementById("content").style.display = "block";
    }, 3000); // Adjust the timeout duration as needed
});


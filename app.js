// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    var button = document.getElementById('redirectButton');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Redirect to the target URL
        window.location.href = 'https://www.example.com'; // Change this to your desired URL
    });
});

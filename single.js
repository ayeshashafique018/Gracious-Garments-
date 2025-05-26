// Get the products dropdown
var productsDropdown = document.getElementById('productsDropdown');

// Add click event listener to the products dropdown button
productsDropdown.addEventListener('click', function() {
    // Toggle the active class to show/hide the dropdown content
    this.classList.toggle('active');
});

// Close the dropdown when clicking outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#productsDropdown')) {
        var dropdowns = document.getElementsByClassName('dropdown');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
});

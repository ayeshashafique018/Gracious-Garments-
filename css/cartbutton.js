document.addEventListener("DOMContentLoaded", function() {
    // Sample array of products
    const products = [
        "Product 1",
        "Product 2",
        "Product 3",
        "Product 4",
        "Product 5"
    ];

    const productList = document.getElementById("productList");

    // Display products in the list
    products.forEach(function(product) {
        const li = document.createElement("li");
        li.textContent = product;
        li.dataset.selected = false; // Initialize data attribute for selection state
        li.addEventListener("click", function() {
            toggleSelection(li);
        });
        productList.appendChild(li);
    });

    // Toggle selection of a product
    function toggleSelection(li) {
        const isSelected = li.dataset.selected === "true";
        li.dataset.selected = !isSelected;
        li.style.backgroundColor = isSelected ? "" : "#f0f0f0";
    }

    // Delete selected products
    document.getElementById("deleteSelectedBtn").addEventListener("click", function() {
        const selectedProducts = Array.from(productList.querySelectorAll("li[data-selected='true']"));
        if (selectedProducts.length === 0) {
            alert("Please select products to delete.");
            return;
        }
        selectedProducts.forEach(function(product) {
            productList.removeChild(product);
        });
        alert("Selected products deleted successfully.");
    });
});

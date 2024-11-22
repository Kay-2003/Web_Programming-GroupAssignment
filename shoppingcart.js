let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to delete an item from the cart
function deleteItem(itemIndex) {
    cart.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

//Question 3d:Clear All button (remove all items from shopping cart)
// clear all items from the cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
} 
//Question 3(b):b.	Allow users to remove items from the cart and update quantities.
//function to update the question 
function updateQuantity(itemName, newQuantity) {
    newQuantity = parseInt(newQuantity); 
    if (newQuantity < 1) {
        alert("Quantity must be at least 1.");
        return;
    }

    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        const price = parseFloat(item.price) || 0;
        item.quantity = newQuantity;
        item.totalPrice = price * newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
}
//this function apply the updated changes from the quantity
function applyUpdates() {
    document.querySelectorAll('.quantity-input').forEach(input => {
        const itemName = input.getAttribute('data-name');
        const newQuantity = input.value;
        updateQuantity(itemName, newQuantity);
    });
    displayCartItems();  
}
// this will display what will the product added to cart
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElement.innerHTML = '';
        return;
    }

    const itemMap = {};

    cart.forEach((item) => {
        //If the item already exists in the map, update its quantity and totalPrice
        if (itemMap[item.name]) {
            itemMap[item.name].quantity += 1;
            itemMap[item.name].totalPrice += item.price;
        } else {
            itemMap[item.name] = { ...item, quantity: 1, totalPrice: item.price };
        }
    });
    // Create a table to display cart items
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Qty</th>
                <th>Item</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
    `;
    const tbody = document.createElement('tbody');
     // Loop through the cart items and create table rows for each
    cart.forEach((item, index) => {
        const quantity = parseInt(item.quantity) || 1;
        let itemTax = 0.99 * item.quantity;  // Tax of 0.99 per item

        //Question 3(C):c.	Calculate and display the total price of the items in the cart.
        const itemTotal = item.totalPrice || (parseFloat(item.price) * quantity + itemTax);  
        subtotal += itemTotal;// Add total to the subtotal

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                       data-name="${item.name}">
            </td>
            <td>${item.name}</td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="deleteItem(${index})">Remove</button></td>
            `;
        tbody.appendChild(row);
    });

    document.getElementById('cart-items').addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            const itemName = event.target.getAttribute('data-name');
            const newQuantity = event.target.value;
            updateQuantity(itemName, newQuantity);
        }
    });
      
    table.appendChild(tbody);
    cartItemsContainer.appendChild(table);

    const updateButton = document.createElement('button');
    updateButton.innerText = "Update Cart";
    updateButton.onclick = applyUpdates;
    cartItemsContainer.appendChild(updateButton);

    // Apply discount based on subtotal
    const discount = subtotal > 50 ? subtotal * 0.15 : 0; 
    const discountedSubtotal = subtotal - discount;
    const shipping = discountedSubtotal > 70 ? 0 : 10.99;
    const totalPrice = discountedSubtotal + shipping;

    //// Display the price details
    totalPriceElement.innerHTML = `
        Subtotal: $${subtotal.toFixed(2)}<br>
        Discount: -$${discount.toFixed(2)}<br>
        Shipping: $${shipping.toFixed(2)}<br>
        <strong>Total: $${totalPrice.toFixed(2)}</strong>
    `;
}
//Question 3:Close button (close the shopping cart view)

//close the function and goes back to the product page 
function closeCart() {
    window.location.href = 'product.html';
}
//Question 3(e):e.	Check Out button (redirects to Checkout Page)
//when checkout is clicked 
function checkout() {
    window.location.href = 'checkout.html';
}
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    document.getElementById('cart-items').addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            const itemName = event.target.getAttribute('data-name');
            const newQuantity = event.target.value;
            updateQuantity(itemName, newQuantity);
        }
    });
});

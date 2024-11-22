document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productList = document.getElementById('product-list');
    let subtotal = 0;

    // Clear the product list in case of reloading
    productList.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * (item.quantity || 0); // Ensure item.quantity is defined
        subtotal += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity || 0}</td> <!-- Display 0 if quantity is not defined -->
            <td>$${itemTotal.toFixed(2)}</td>
        `;
        productList.appendChild(row);
    });

    // Update subtotal and total
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);

    const discount = subtotal > 50 ? subtotal * 0.15 : 0; // Apply a discount if subtotal is greater than $50
    const shippingFee = subtotal > 70 ? 0 : 10.99; // Free shipping for orders over $70
    const total = subtotal - discount + shippingFee;

    document.getElementById('discount').textContent = discount.toFixed(2);
    document.getElementById('shipping-fee').textContent = shippingFee.toFixed(2);
    document.getElementById('total-amount').textContent = total.toFixed(2);
});

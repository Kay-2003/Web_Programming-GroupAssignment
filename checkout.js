document.addEventListener('DOMContentLoaded', function () {
    // #4.a - Show a summary of the shopping cart with the total cost.
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal.toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(row);
    });

    const discount = subtotal > 50 ? subtotal * 0.15 : 0;
    const shippingFee = subtotal - discount > 70 ? 0 : 10.99;
    const total = subtotal - discount + shippingFee;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('discount').textContent = `-$${discount.toFixed(2)}`;
    document.getElementById('shipping-fee').textContent = `$${shippingFee.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;

    // #4.b - Allow the user to enter their shipping details (e.g., name, address, amount being paid).
    // #4.c - When the user confirms the checkout, generate an invoice.
    // #4.d - Confirm button (confirms the checkout)
    document.getElementById('confirm-checkout').addEventListener('click', function () {
        const customerName = document.getElementById('customer-name').value;
        const shippingAddress = document.getElementById('shipping-address').value;
        const amountPaid = document.getElementById('amount-paid').value;

        if (!customerName || !shippingAddress || !amountPaid) {
            alert('Please fill in all the required fields.');
            return;
        }

        // Save shipping details to localStorage
        localStorage.setItem('customerName', customerName);
        localStorage.setItem('customerAddress', shippingAddress);

        // Go to the Invoice Page
        window.location.href = 'invoice.html';
    });

    // #4.e - Cancel button (go back to the cart)
    document.getElementById('cancel-checkout').addEventListener('click', function () {
        window.location.href = 'shoppingcart.html';
    });
});

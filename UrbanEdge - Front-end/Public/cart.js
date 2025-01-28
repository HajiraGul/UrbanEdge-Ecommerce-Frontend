// Retrieve cart items from localStorage or initialize an empty array
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Get references to HTML elements
const cartIcon = document.getElementById('cart-icon');
const cartItemsContainer = document.getElementById('cart-items');
const cartSubtotal = document.getElementById('cart-subtotal');
const totalPrice = document.getElementById('total-price');
const discountPrice = document.getElementById('discount-price');
const checkoutButton = document.getElementById('checkout-button');
const applyButton = document.getElementById('coupon-button');

// Update the cart view
function updateCart() {
    cartItemsContainer.innerHTML = ''; // Clear previous items
    let subtotal = 0;

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><a href="#" class="fas fa-times-circle" onclick="removeItem(${index}, event)"></a></td>
            <td><img src="${item.image}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)" min="1"></td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;

        cartItemsContainer.appendChild(row);
        subtotal += item.price * item.quantity;
    });

    // Update subtotal and total
    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    updateTotal(subtotal);

    // Update the cart icon with the number of items
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    cartIcon.innerHTML = `(${totalItems})`;
}

// Remove an item from the cart
function removeItem(index, event) {
    event.preventDefault();
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart();
}

// Update item quantity
function updateQuantity(index, quantity) {
    if (quantity < 1) {
        alert('Quantity must be at least 1.');
        return;
    }
    cartItems[index].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart();
}

// Update total price, including discount
function updateTotal(subtotal) {
    const discount = parseFloat(discountPrice.textContent.replace('$', '')) || 0;
    const total = subtotal - discount;
    totalPrice.textContent = `$${total.toFixed(2)}`;
}

// Handle checkout click
checkoutButton.addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    alert('Purchase Successful!');
    localStorage.removeItem('cart'); // Clear the cart after successful purchase
    cartItems.length = 0; // Clear the array
    updateCart(); // Update cart display after purchase
});

// Handle coupon application click
applyButton.addEventListener('click', () => {
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value.trim().toLowerCase();

    // Check if the coupon field is empty
    if (couponCode === '') {
        alert('Please enter a coupon code.');
        return; // Stop the function execution
    }

    // Example: Apply a 10% discount for a specific coupon code
    if (couponCode === 'discount10') {
        const discount = 0.1;
        const subtotal = parseFloat(cartSubtotal.textContent.replace('$', ''));
        const discountAmount = subtotal * discount;
        discountPrice.textContent = `$${discountAmount.toFixed(2)}`;
        updateTotal(subtotal); // Update total after applying discount
        alert('Coupon Applied! 10% discount added.');
    } else {
        alert('Invalid coupon code.');
    }
});

// Initial cart update
updateCart();

// Store registered users in localStorage (this is for demonstration purposes)
function registerUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (!userExists) {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please login.');
        // Hide registration form and show login form
        document.getElementById('registrationContainer').style.display = 'none';
        document.getElementById('Login').style.display = 'block';
    } else {
        alert('User already registered with this email.');
    }
}

// Handle form submissions for login
document.getElementById('Login').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered email and password match any registered user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to product page
        window.location.href = 'product.html';
    } else {
        alert('Invalid login details. Please try again.');
    }
});

// Handle form submissions for registration
document.getElementById('registration').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Register user (saving to localStorage)
    registerUser(email, password);
});

// Function to show the registration form and hide the login form
function openRegistration() {
    document.getElementById('Login').style.display = 'none';
    document.getElementById('registrationContainer').style.display = 'block';
}

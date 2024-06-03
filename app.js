// Function to handle registration
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const message = document.getElementById('register-message');

    if (username === '' || password === '') {
        message.textContent = 'Please fill in all fields';
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    message.textContent = 'Registration successful!';
}

// Function to handle login
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        message.textContent = '';
        window.location.href = 'secured.html';
    } else {
        message.textContent = 'Invalid username or password';
    }
}

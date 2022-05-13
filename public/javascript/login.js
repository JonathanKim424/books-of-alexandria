async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/employees/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('Login Successful!!');
            alert("Login Successful!");
        } else {
            response.json().then(data => {
                alert(data.message);
            });
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
async function registerFormHandler(event) {
    event.preventDefault();

    const employee_name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (employee_name && email && password) {
        const response = await fetch('/api/employees', {
            method: 'post',
            body: JSON.stringify({
                employee_name,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.register-form').addEventListener('submit', registerFormHandler);
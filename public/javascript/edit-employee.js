async function deleteEmployeeHandler(event) {
    event.preventDefault();

    const delId = document.querySelector('input[name="delete-id"]').value.trim();

    if (delId) {
        const response = await fetch(`api/employees/${delId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(`deleted employee at value ${delId}`);
        } else {
            alert(response.statusText);
        }
    }
};

async function updateEmployeeHandler(event) {
    event.preventDefault();

    const updateId = document.querySelector('input[name="update-id"]').value.trim();
    const employee_name = document.querySelector('input[name="new-name"]').value.trim();
    const email = document.querySelector('input[name="new-email"]').value.trim();

    if (updateId && employee_name && email) {
        const response = await fetch(`api/employees/${updateId}`, {
            method: 'PUT',
            body: JSON.stringify({ employee_name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(`employee at id ${updateId} updated`);
        } else {
            alert(response.statusText);
        }
    } else if (updateId && employee_name) {
            const response = await fetch(`api/employees/${updateId}`, {
            method: 'PUT',
            body: JSON.stringify({ employee_name }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(`employee at id ${updateId} updated`);
        } else {
            alert(response.statusText);
        }
    } else if (updateId && email) {
            const response = await fetch(`api/employees/${updateId}`, {
            method: 'PUT',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(`employee at id ${updateId} updated`);
        } else {
            alert(response.statusText);
        }
    }    
};

document.querySelector('.delete-form').addEventListener('submit', deleteEmployeeHandler);
document.querySelector('.edit-form').addEventListener('submit', updateEmployeeHandler);
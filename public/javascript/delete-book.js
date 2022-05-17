async function deleteBookHandler(event) {
    event.preventDefault();

    const delId = document.querySelector('input[name="delete-id"]').value.trim();

    if (delId) {
        const response = await fetch(`api/books/${delId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(`deleted book at value ${delId}`);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.delete-form').addEventListener('submit', deleteBookHandler);
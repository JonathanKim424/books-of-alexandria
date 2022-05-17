async function deleteBookHandler(event) {
    event.preventDefault();

    const delId = document.querySelector('#delete-id').value.trim();

    if (delId) {
        const response = await fetch(`api/books/${delId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log('all good');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#delete-book').addEventListener('submit', deleteBookHandler);
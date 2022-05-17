async function addBookHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const isbn = document.querySelector('#isbn').value.trim();
    const genre = document.querySelector('#genre').value.trim();
    const price = document.querySelector('#price').value.trim();

    if (title && author && isbn && genre && price) {
        const response = await fetch('api/books', {
            method: 'POST',
            body: JSON.stringify({ title, author, isbn, genre, price }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('all good');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#add-book').addEventListener('submit', addBookHandler);
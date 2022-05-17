async function addBookHandler(event) {
    event.preventDefault();

    const book_title = document.querySelector('input[name="title"]').value.trim();
    const author = document.querySelector('input[name="author"]').value.trim();
    const isbn = document.querySelector('input[name="isbn"]').value.trim();
    const genre = document.querySelector('input[name="genre"]').value.trim();
    const price = document.querySelector('input[name="price"]').value.trim();
    const stock = document.querySelector('input[name="stock"]').value.trim();

    if (book_title && author && isbn && genre && price) {
        const response = await fetch('api/books', {
            method: 'POST',
            body: JSON.stringify({ book_title, author, isbn, genre, price, stock }),
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

document.querySelector('.addBook-form').addEventListener('submit', addBookHandler);
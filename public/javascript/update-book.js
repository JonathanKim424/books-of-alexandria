async function updateInventoryHandler(event) {
    event.preventDefault();

    const stockId = document.querySelector('input[name="id-stock"]').value.trim();
    const stock = document.querySelector('input[name="new-stock"]').value.trim();

    if (stockId && stock) {
        const response = await fetch(`api/books/${stockId}`, {
            method: 'PUT',
            body: JSON.stringify({ stock }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(`updated stock for id ${stockId} to ${stock}`);
        } else {
            alert(response.statusText);
        }
    }
};

async function updatePriceHandler(event) {
    event.preventDefault();

    const priceId = document.querySelector('input[name="id-price"]').value.trim();
    const price = document.querySelector('input[name="new-price"]').value.trim();
    const check = document.querySelector('input[name="sale"]').checked;
    let bookSale
    
    if (check) {
        bookSale = { price: price, onSale: true}
    } else {
        bookSale = { price: price, onSale: false}
    };

    if (priceId && price) {
        const response = await fetch(`api/books/${priceId}`, {
            method: 'PUT',
            body: JSON.stringify(bookSale),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(`updated price for id ${priceId} to ${price}`);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.edit-form').addEventListener('submit', updateInventoryHandler);
document.querySelector('.sales-form').addEventListener('submit', updatePriceHandler);
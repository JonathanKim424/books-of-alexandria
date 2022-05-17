async function updateInventoryHandler(event) {
    event.preventDefault();

    const stockId = document.querySelector('#id-stock').value.trim();
    const newStock = document.querySelector('#new-stock').value.trim();

    if (stockId && newStock) {
        const response = await fetch(`api/books/${stockId}`, {
            method: 'PUT',
            body: JSON.stringify({ newStock }),
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

async function updatePriceHandler(event) {
    event.preventDefault();

    const priceId = document.querySelector('#id-price').value.trim();
    const newPrice = document.querySelector('#new-price').value.trim();

    if (priceId && newPrice) {
        const response = await fetch(`api/books/${priceId}`, {
            method: 'PUT',
            body: JSON.stringify({ newPrice }),
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

document.querySelector('#stock-btn').addEventListener('submit', updateInventoryHandler);
document.querySelector('#price-btn').addEventListener('submit', updatePriceHandler);
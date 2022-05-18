const { Book } = require('../models');

const bookData = [
    {
        book_title: '1984',
        author: 'George Orwell',
        isbn: '978-0451524935',
        genre_id: [1],
        price: 9.99,
        stock: 10,
        book_img: "https://images-na.ssl-images-amazon.com/images/I/51sdWhtHOwL.jpg",
        onSale: false
    },
    {
        book_title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        isbn: '978-0553380163',
        genre_id: [7],
        price: 9.99,
        stock: 10,
        book_img: "https://images-na.ssl-images-amazon.com/images/I/A1xkFZX5k-L.jpg",
        onSale: false
    },
    {
        book_title: 'Dune',
        author: 'Frank Herbert',
        isbn: '978-0441013593',
        genre_id: [1],
        price: 14.99,
        stock: 10,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/91OoNH1+MHL.jpg',
        onSale: true
    },
    {
        book_title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        isbn: '978-1451673319',
        genre_id: [1],
        price: 9.99,
        stock: 10,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/71OFqSRFDgL.jpg',
        onSale: true
    },
    {
        book_title: 'The Road',
        author: 'Cormac McCarthy',
        isbn: '978-0307387899',
        genre_id: [1],
        price: 14.99,
        stock: 10,
        book_img: 'https://images-na.ssl-images-amazon.com/images/I/71IJ1HC2a3L.jpg',
        onSale: false
    }
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
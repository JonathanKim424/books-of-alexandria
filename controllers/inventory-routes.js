const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Genre } = require('../models');

router.get('/', (req, res) => {
    Book.findAll({
        attributes: ['id', 'book_title', 'genre_id', 'author', 'price', 'stock', 'book_img'],
        include: [
            {
                model: Genre,
                attributes: ['genre_name']
            }
        ] 
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('inventory', { books/*, loggedIn: true*/ });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
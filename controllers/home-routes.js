const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Genre } = require('../models');

// router.get('/', (req, res) => {
//     res.render('inventory', {
//         loggedIn: req.session.loggedIn
//     });
// });

router.get('/', (req, res) => {
    Book.findAll({
        attributes: ['id', 'book_title', 'genre_id', 'author', 'price', 'stock'],
        include: [
            {
                model: Genre,
                attributes: ['genre_name']
            }
        ] 
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('inventory', { books, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;
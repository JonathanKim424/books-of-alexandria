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
        res.render('inventory', { books });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/bygenre/:id', (req, res) => {
    Book.findAll({
        include: [
            {
                model: Genre,
                attributes: ['genre_name']
            }
        ],
        where: {
            genre_id: req.params.id
        }
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('inventory', { books });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/byauthordesc', (req, res) => {
    Book.findAll({
        include: [
            {
                model: Genre,
                attributes: ['genre_name']
            }
        ],
        order: [
            ['author', 'DESC']
        ]
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('inventory', { books });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/byauthorasc', (req, res) => {
    Book.findAll({
        include: [
            {
                model: Genre,
                attributes: ['genre_name']
            }
        ],
        order: [
            ['author', 'ASC']
        ]
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('inventory', { books });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/onsale', (req, res) => {
    Book.findAll({
        where: {
            onSale: true
        },
        include: [
            {
                model: Genre,
                attributes: ['genre_name']
            }
        ]
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('inventory', { books });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Book.findAll({
        // include: [
        //     {
        //         model: Genre,
        //         attributes: ['genres']
        //     }
        // ]
    }).then(dbBookData => res.json(dbBookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Book.findOne({
        // include: [
        //     {
        //         model: Genre,
        //         attributes: ['genres']
        //     }
        // ]
    })
    .then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No book found with this id' });
            return;
        }
        res.json(dbBookData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', /*withAuth,*/ (req, res) => {
    if (req.session) {
        Book.create({
            book_title: req.body.book_title,
            author: req.body.author,
            isbn: req.body.isbn,
            genre_id: req.body.genre_id,
            price: req.body.price,
            stock: req.body.stock
        })
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});

router.put('/:id', /*withAuth,*/ (req, res) => {
    Book.update(
        {
            price: req.body.price,
            stock: req.body.stock
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No book found with this id' });
            return;
        }
        res.json(dbBookData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', /*withAuth,*/ (req, res) => {
    Book.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No book found with this id' });
            return;
        }
        res.json(dbBookData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
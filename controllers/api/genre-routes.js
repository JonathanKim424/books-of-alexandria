const router = require('express').Router();
const { Genre, Book }= require('../../models');

router.get('/', (req, res) => {
    Genre.findAll()
    .then(dbGenreData => res.json(dbGenreData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Genre.findOne({
        include: [
            {
                model: Book,
                attributes: ['book_title', 'author', 'isbn', 'price', 'stock']
            }
        ]
    })
    .then(dbGenreData => {
        if (!dbGenreData) {
            res.status(404).json({ message: 'No genre found with this id' });
            return;
        }
        res.json(dbGenreData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', /*withAuth,*/ (req, res) => {
    // if (req.session) {
        Genre.create({
            genre_name: req.body.genre_name
        })
        .then(dbGenreData => res.json(dbGenreData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    //}
});

router.put('/:id', /*withAuth,*/ (req, res) => {
    Genre.update(
        {
            genre_name: req.body.genre_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbGenreData => {
        if (!dbGenreData) {
            res.status(404).json({ message: 'No genre found with this id' });
            return;
        }
        res.json(dbGenreData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', /*withAuth,*/ (req, res) => {
    Genre.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGenreData => {
        if (!dbGenreData) {
            res.status(404).json({ message: 'No genre found with this id' });
            return;
        }
        res.json(dbGenreData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
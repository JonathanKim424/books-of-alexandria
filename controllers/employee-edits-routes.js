const router = require('express').Router();
const withAuth = require('../../tech-blog/utils/auth');
const sequelize = require('../config/connection');
const { Book, Genre, Employee } = require('../models');


router.get('/', (req, res) => {
    res.render('employee-edits');
});

// // add book
// router.post('/', /*withAuth,*/ (req, res) => {
//     Book.create({
//         book_title: req.body.book_title,
//         author: req.body.author,
//         isbn: req.body.isbn,
//         genre_id: req.body.genre_id,
//         price: req.body.price,
//         book_img: req.body.book_img
//     }).then(dbBookData => res.json(dbBookData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // delete book
// router.delete('/', /*withAuth,*/ (req, res) => {
//     Book.destroy({
//         where: {
//             id: req.body.id
//         }
//     })
//     .then(dbBookData => {
//         if (!dbBookData) {
//             res.status(404).json({ message: 'No book found with this id' });
//             return;
//         }
//         res.json(dbBookData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // edit stock
// router.put('/', /*withAuth,*/ (req, res) => {
//     Book.update(
//         {
//             stock: req.body.stock
//         },
//         {
//             where: {
//                 id: req.body.id
//             }
//         }
//     )
//     .then(dbBookData => {
//         if (!dbBookData) {
//             res.status(404).json({ message: 'No book found with this id' });
//             return;
//         }
//         res.json(dbBookData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // update price
// router.put('/', /*withAuth,*/ (req, res) => {
//     Book.update(
//         {
//             price: req.body.price
//         },
//         {
//             where: {
//                 id: req.body.id
//             }
//         }
//     )
//     .then(dbBookData => {
//         if (!dbBookData) {
//             res.status(404).json({ message: 'No book found with this id' });
//             return;
//         }
//         res.json(dbBookData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });


module.exports = router;
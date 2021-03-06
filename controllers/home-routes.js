const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Genre } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;
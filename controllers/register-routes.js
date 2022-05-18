const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Genre } = require('../models');

router.get('/', (req, res) => {
    res.render('register', {
        loggedIn: req.session.loggedIn
    });
});


module.exports = router;
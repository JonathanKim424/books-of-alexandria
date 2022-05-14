const router = require('express').Router();
const sequelize = require('../config/connection');

const { Employee } = require('../models');

router.get('/', (req, res) => {
    res.render('inventory', {
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

module.exports = router;
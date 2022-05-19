const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Genre, Employee } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    res.render('employee-edits', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;
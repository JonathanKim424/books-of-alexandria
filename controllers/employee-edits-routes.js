const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Genre, Employee } = require('../models');

router.get('/', (req, res) => {
    res.render('employee-edits', {
        
    });
});

module.exports = router;
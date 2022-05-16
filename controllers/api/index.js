const router = require('express').Router();

const bookRoutes = require('./book-routes');
const employeeRoutes = require('./employee-routes');
const genreRoutes = require('./genre-routes');

router.use('/books', bookRoutes);
router.use('/employees', employeeRoutes);
router.use('/genres', genreRoutes);

module.exports = router;
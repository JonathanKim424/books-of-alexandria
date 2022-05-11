const router = require('express').Router();

const bookRoutes = require('./book-routes');
const genreRoutes = require('./genre-routes');

router.use('/books', bookRoutes);
router.use('/genres', genreRoutes);

module.exports = router;
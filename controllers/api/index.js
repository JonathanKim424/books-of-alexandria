const router = require('express').Router();

const bookRoutes = require('./book-routes');
<<<<<<< HEAD
const employeeRoutes = require('./employee-routes');

router.use('/books', bookRoutes);
router.use('/employees', employeeRoutes);
=======
const genreRoutes = require('./genre-routes');

router.use('/books', bookRoutes);
router.use('/genres', genreRoutes);
>>>>>>> feature/genres

module.exports = router;
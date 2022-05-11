const router = require('express').Router();

const bookRoutes = require('./book-routes');
const employeeRoutes = require('./employee-routes');

router.use('/books', bookRoutes);
router.use('/employees', employeeRoutes);

module.exports = router;
const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const inventoryRoutes = require('./inventory-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/inventory', inventoryRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
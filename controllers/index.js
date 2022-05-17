const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const inventoryRoutes = require('./inventory-routes.js');
const employeeEdits = require('./employee-edits-routes');
const editEmployees = require('./edit-employee');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/employee-edits', employeeEdits);
router.use('/edit-employee', editEmployees)


router.use((req, res) => {
    res.status(404).end();
});

// handlebars - route to home-routes
router.use('/', homeRoutes)

module.exports = router;
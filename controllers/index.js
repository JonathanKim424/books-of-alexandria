const router = require('express').Router();

const apiRoutes = require('./api');

// handlebars route
const homeRoutes = require('./home-routes')

router.use('/api', apiRoutes);


router.use((req, res) => {
    res.status(404).end();
});

// handlebars - route to home-routes
router.use('/', homeRoutes)

module.exports = router;
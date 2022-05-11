const router = require('express').Router();
const { Employee } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Employee.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbEmployeeData => res.json(dbEmployeeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Employee.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'No employee found with this id' });
            return;
        }
        res.json(dbEmployeeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Employee.create({
        employee_name: req.body.employee_name,
        username: req.body.username,
        password: req.body.password
    })
    .then(dbEmployeeData => {
        req.session.save(() => {
            req.session.employee_id = dbEmployeeData.id;
            req.session.username = dbEmployeeData.username;
            req.session.loggedIn = true;
            res.json(dbEmployeeData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    Employee.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(400).json({ message: 'No user with that username!' });
            return;
        }
        const validPassword = dbEmployeeData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            req.session.employee_id = dbEmployeeData.id;
            req.session.username = dbEmployeeData.username;
            req.session.loggedIn = true;
            res.json({ employee: dbEmployeeData, message: 'You are now logged in!' })
        });
    });
});

router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', withAuth, (req, res) => {
    Employee.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbEmployeeData => {
        if (!dbEmployeeData[0]) {
            res.status(404).json({ message: 'No employee found with this id' });
            return;
        }
        res.json(dbEmployeeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Employee.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbEmployeeData => {
        if (!dbEmployeeData) {
            res.status(404).json({ message: 'No employee found with this id' });
            return;
        }
        res.json(dbEmployeeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
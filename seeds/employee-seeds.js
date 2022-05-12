const { Employee } = require('../models');

const employeeData = [
    {
        employee_name: 'Rufaro Mendes',
        username: 'rufaro',
        password: 'password1234'
    },
    {
        employee_name: 'Tomiko Lyons',
        username: 'tomiko',
        password: 'password1234'
    },
    {
        employee_name: 'Ruslan Gladwin',
        username: 'ruslan',
        password: 'password1234'
    },
    {
        employee_name: 'Helga Hartley',
        username: 'helga',
        password: 'password1234'
    }
];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
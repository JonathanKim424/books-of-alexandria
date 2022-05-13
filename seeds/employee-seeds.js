const { Employee } = require('../models');

const employeeData = [
    {
        employee_name: 'Rufaro Mendes',
        email: 'rufaro@gmail.com',
        password: 'password1234'
    },
    {
        employee_name: 'Tomiko Lyons',
        email: 'tomiko@gmail.com',
        password: 'password1234'
    },
    {
        employee_name: 'Ruslan Gladwin',
        email: 'ruslan@gmail.com',
        password: 'password1234'
    },
    {
        employee_name: 'Helga Hartley',
        email: 'helga@gmail.com',
        password: 'password1234'
    }
];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
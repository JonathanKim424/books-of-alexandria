const seedBooks = require('./book-seeds');
// const seedEmployees = require('./employee-seeds');
const seedGenres = require('./genre-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedGenres();
    console.log('\n----- GENRES SEEDED -----\n');
    await seedBooks();
    console.log('\n----- BOOKS SEEDED -----\n');
    // await seedEmployees();
    // console.log('\n----- EMPLOYEES SEEDED -----\n');
    process.exit(0);
};

seedAll();
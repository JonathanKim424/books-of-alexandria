const seedBooks = require('./book-seeds');
const seedEmployees = require('./employee-seeds');
<<<<<<< HEAD
=======
const seedGenres = require('./genre-seeds');
>>>>>>> feature/genres

const sequelize = require('../config/connection');

const seedAll = async () => {
<<<<<<< HEAD
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedGenres();
    console.log('\n----- GENRES SEEDED -----\n');
    await seedBooks();
    console.log('\n----- BOOKS SEEDED -----\n');
    await seedEmployees();
    console.log('\n----- EMPLOYEES SEEDED -----\n');
    process.exit(0);
=======
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBooks();
  console.log('\n----- BOOKS SEEDED -----\n');

  await seedEmployees();
  console.log('\n----- EMPLOYEES SEEDED -----\n');

  await seedGenres();
  console.log('\n----- GENRES SEEDED -----\n');

  process.exit(0);
>>>>>>> feature/genres
};

seedAll();
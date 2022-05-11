const Book = require('./Book');
const Employee = require('./Employee');
const Genre = require ('./Genre');

Book.belongsTo(Genre, {
    foreignKey: 'book_id'
});

Genre.hasMany(Book, {
    foreignKey: 'book_id'
});

module.exports = { Book, Employee, Genre};
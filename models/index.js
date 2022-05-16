const Book = require('./Book');
const Employee = require('./Employee');
const Genre = require ('./Genre');

Book.belongsTo(Genre, {
    foreignKey: 'genre_id'
});

Genre.hasMany(Book, {
    foreignKey: 'genre_id'
});

module.exports = { Book, Employee, Genre};
const Book = require('./Book');
const Employee = require('./Employee');
const Genre = require ('./Genre');

Book.hasOne(Genre, {
    foreignKey: 'genre_id'
});

Genre.hasMany(Book, {
    foreignKey: 'book_id'
});

module.exports = { Book, Employee, Genre};
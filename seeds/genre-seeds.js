const { Genre } = require('../models');

const genreData = [
    {
        genre_name: 'Sci-Fi/Fantasy',
    },
    {
        genre_name: 'Romance',
    },
    {
        genre_name: 'Horror',
    },
    {
        genre_name: 'History',
    },
    {
        genre_name: 'Biography',
    },
    {
        genre_name: 'Classics',
    },
    {
        genre_name: 'Educational',
    },
    {
        genre_name: "Children's",
    },
    {
        genre_name: 'Comedy',
    },
    {
        genre_name: 'Novel',
    },
]

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;
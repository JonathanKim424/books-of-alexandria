const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [9]
            }
        },
        genre_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'genre',
                key: 'id'
            }
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        book_img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        onSale: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;
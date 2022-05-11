const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Employee extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        employee_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newEmployeeData) {
                newEmployeeData.password = await bcrypt.hash(newEmployeeData.password, 10);
                return newEmployeeData;
            },
            async beforeUpdate(updatedEmployeeData) {
                updatedEmployeeData.password = await bcrypt.hash(updatedEmployeeData.password, 10);
                return updatedEmployeeData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
);

module.exports = Employee;
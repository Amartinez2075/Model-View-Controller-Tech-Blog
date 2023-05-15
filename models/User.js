const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection'); // Importing database connection module
const bcrypt = require('bcrypt'); // Importing bcrypt module for password hashing

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
}, {
    hooks: {
        async beforeCreate(newUserData) { // Using hooks to hash password before creating user
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) { // Using hooks to hash password before updating user
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize, // Passing in the database connection instance
    timestamps: false, // Disabling timestamps for the model
    freezeTableName: true, // Setting the model's table name to be the same as the model name
    underscored: true, // Setting all column names to use snake_case instead of camelCase
    modelName: 'user' // Setting the model name to be 'user'
})


module.exports = User; // Exporting the User model
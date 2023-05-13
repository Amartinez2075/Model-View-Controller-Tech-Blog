// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define a new class "Post" that extends from "Model" class
class Post extends Model {}

// Initialize "Post" model with the following properties and options
Post.init({
    // Define an "id" property as an integer that cannot be null, serves as a primary key, and auto-increments
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // Define a "title" property as a string that cannot be null and must have a minimum length of 1 character
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    // Define a "content" property as a string that cannot be null and must have a minimum length of 1 character
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    // Define a "user_id" property as an integer that references the "id" column of the "user" model
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    // Pass in the connection instance to the model
    sequelize,
    // Define the name of the table as the singular version of the model name
    freezeTableName: true,
    // Use underscored naming convention for the columns
    underscored: true,
    // Define the name of the model as "post"
    modelName: 'post'
})

// Export the "Post" model
module.exports = Post;

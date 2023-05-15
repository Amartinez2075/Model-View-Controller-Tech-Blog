// Importing necessary packages
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Defining the Comment model by extending the Model class from Sequelize
class Comment extends Model {}

// Initializing the Comment model with column definitions and model configurations
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user', // References the user model's id
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post', // References the post model's id
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
})

// Exporting the Comment model
module.exports = Comment;
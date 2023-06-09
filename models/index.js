// Import the User, Post, and Comment models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Define associations between User and Post models
User.hasMany(Post, {
    foreignKey: 'user_id'
})

// Define associations between User and Comment models
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

// Define associations between Post and User models
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// Define associations between Post and Comment models
Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

// Define associations between Comment and User models
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// Define associations between Comment and Post models
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

// Export the User, Post, and Comment models
module.exports = {
    User,
    Post,
    Comment
};
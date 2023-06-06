// Import necessary libraries and files
const router = require('express').Router(); // Router object from Express framework
const sequelize = require('../config/connection'); // Connect to database
const { Post, User, Comment } = require('../models'); // Import database models
const withAuth = require('../utils/auth'); // Import authorization middleware

// Route to get all posts associated with logged-in user and render dashboard handlebar template
router.get('/', withAuth, (req, res) => {
Post.findAll({
where: {
user_id: req.session.user_id // Find all posts associated with logged-in user
},
attributes: [
'id',
'title',
'content',
'created_at'
],
include: [
{
model: Comment, // Include all comments associated with each post
attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
include: {
model: User, // Include username of commenter
attributes: ['username']
}
},
{
model: User, // Include username of post creator
attributes: ['username']
}
]
})
.then(dbPostData => {
const posts = dbPostData.map(post => post.get({ plain: true })); // Map each post object to plain object
res.render('dashboard', { posts, loggedIn: true }); // Render dashboard handlebars template and pass in posts and loggedIn boolean
})
.catch(err => {
console.log(err);
res.status(500).json(err);
});
});

// Route to get a specific post by id for editing and render edit-post handlebar template
router.get('/edit/:id', withAuth, (req, res) => {
Post.findOne({
where: {
id: req.params.id // Find post with specified id
},
attributes: [
'id',
'title',
'content',
'created_at'
],
include: [
{
model: Comment, // Include all comments associated with post
attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
include: {
model: User, // Include username of commenter
attributes: ['username']
}
},
{
model: User, // Include username of post creator
attributes: ['username']
}
]
})
.then(dbPostData => {
if (!dbPostData) {
res.status(404).json({ message: 'No post found with this id' });
return;
}
const post = dbPostData.get({ plain: true }); // Map post object to plain object
res.render('edit-post', { post, loggedIn: true }); // Render edit-post handlebars template and pass in post and loggedIn boolean
})
.catch(err => {
console.log(err);
res.status(500).json(err);
});
})

// Route to render add-post handlebar template
router.get('/new', (req, res) => {
res.render('add-post', { loggedIn: true }) // Render add-post handlebars template and pass in loggedIn boolean
})

router.get('/create', (req, res) => {
    res.render('create-post', { loggedIn: true })
 }); // Render add-post handlebars template and pass in loggedIn boolean


module.exports = router; // Export router object to make routes available to other parts of application
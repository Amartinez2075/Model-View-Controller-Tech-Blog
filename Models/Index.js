const router = require('express').router(); 
const sequelize = require ('../config/connection.js');
const {
    Post, 
    User, 
    Comment
} = require ('../models'); 
const withAuth= require('../utils/auth');
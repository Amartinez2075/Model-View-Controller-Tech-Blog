// This function is a middleware that checks if there is a user session ID in the request object
// If there isn't one, the user is redirected to the login page
// Otherwise, the next middleware is called
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  // The withAuth middleware function is exported so it can be used in other files
  module.exports = withAuth;
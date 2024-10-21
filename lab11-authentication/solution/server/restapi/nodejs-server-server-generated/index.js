'use strict';

var path = require('path');
var http = require('http');
/** Authentication-related imports **/
var passport = require('passport');
var session = require('express-session');
var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
            return next();
        }
        return res.status(401).json({error: 'Not authorized'});
}

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

app.use(session({
    secret: "shhhhh... it's a secret!",
    resave: false,
    saveUninitialized: false,
  }));
app.use(passport.authenticate('session'));

/*** Passport ***/
  
// Serializing in the session the user object given from LocalStrategy(verify).
passport.serializeUser(function (user, cb) { // this user is id + username + name 
    cb(null, user);
});
  
// Starting from the data in the session, we extract the current (logged-in) user.
passport.deserializeUser(function (user, cb) { // this user is id + email + name 
    // if needed, we can do extra check here (e.g., double check that the user is still in the database, etc.)
    // e.g.: return userDao.getUserById(id).then(user => cb(null, user)).catch(err => cb(err, null));
    return cb(null, user); // this will be available in req.user
});
  

var userController = require(path.join(__dirname, 'controllers/Users'));
app.get('/api/users', userController.getUsers);
app.get('/api/users/:userId', userController.getUser);
app.post('/api/users/authenticator', userController.authenticateUser);
var filmController = require(path.join(__dirname, 'controllers/Films'));
app.get('/api/films/public', filmController.getPublicFilms);
app.get('/api/films/private', isLoggedIn, filmController.getPrivateFilms);
app.post('/api/films', isLoggedIn,filmController.createFilm);

var reviewController = require(path.join(__dirname, 'controllers/Reviews'));

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

